const { EventEmitter } = require('events');
const usersJson = require('./data/users.json');
const Moment = require('moment')


class InvitesRepository extends EventEmitter {
    constructor() {
        super();
        this._users = usersJson;
        this._numOfCards = 10;
        this._invitesObjects = {};
    }
    getInvitation(body, logger) {
        const newInvite = {
            inviteID: Date.now(), //Random number
            moment: new Moment().format(),
            userID: body.id,
            name: body.name,
            cards: body.cards
        };
        this._numOfCards -= newInvite.cards;
        if (this._numOfCards >= 0) {
            this._invitesObjects[newInvite.inviteID] = newInvite;
            this.emit("addInvite", newInvite.inviteID, newInvite.moment, newInvite.userID, newInvite.name, newInvite.cards, logger);
            return 1;
        } else {
            this._numOfCards += newInvite.cards;
            this.emit("noMoreCards", logger);
            return 0;
        }
    }
    getAll(id, logger) {
        for (let user of this._users) {
            if (user.id == id) {
                if (user.isAdmin == "true") {
                    this.emit("getAll", logger);
                    return this._invitesObjects;
                } else {
                    this.emit("accessBlocked", id, logger);
                    return 0;
                }
            }
        }
        this.emit("userIsNotExist", id, logger);
        return 0;
    }
    getLog(id, logger) {
        for (let user of this._users) {
            if (user.id == id) {
                if (user.isAdmin == "true") {
                    this.emit("getLog", logger);
                    return logger.getLogFile();
                } else {
                    this.emit("accessBlocked", id, logger);
                    return 0;
                }
            }
        }
        this.emit("userIsNotExist", user.id, logger);
        return 0;
    }
    deleteAll(id, logger) {
        for (let user of this._users) {
            if (user.id == id) {
                if (user.isAdmin == "true") {
                    this._invitesObjects = {};
                    this._numOfCards = 10;
                    this.emit("deleteAll", logger);
                    return 1;
                } else {
                    this.emit("accessBlocked", id, logger);
                    return 0;
                }
            }
        }
        this.emit("userIsNotExist", id, logger);
        return 0;
    }
    deleteOne(inviteID, logger) {
        if (this._invitesObjects[inviteID] != null) {
            this._numOfCards += this._invitesObjects[inviteID].cards;
            delete this._invitesObjects[inviteID];
            this.emit("deleteOne", inviteID, logger);
            return 1;
        } else {
            this.emit("inviteIsNotExist", inviteID, logger);
            return 0;
        }
    }
    updateInvitation(body, inviteID, logger) {
        if (this._invitesObjects[inviteID] != null) {
            if (body.id == this._invitesObjects[inviteID].userID) {
                this._numOfCards += this._invitesObjects[inviteID].cards;
                this._numOfCards -= body.cards;
                if (this._numOfCards >= 0) {
                    this._invitesObjects[inviteID].cards = body.cards;
                    this._invitesObjects[inviteID].name = body.name;
                    this.emit("updateInvitation", inviteID, body.cards, body.name, logger);
                    return 1
                } else {
                    this._numOfCards += body.cards;
                    this._numOfCards -= this._invitesObjects[inviteID].cards;
                    this.emit("notEnoughCards", inviteID, this._invitesObjects[inviteID].cards, body.cards, logger);
                    return 0;
                }
            } else {
                this.emit("userIsNotExist", body.id, logger);
                return 0;
            }
        } else {
            this.emit("inviteIsNotExist", inviteID, logger);
            return 0;
        }
    }
}

module.exports = () => {
    const InvitesRepo = new InvitesRepository()
        .on('addInvite', (inviteID, moment, userID, name, cards, logger) => {
            console.log('-- Add invite fired --');
            logger.write(`Invitation ${inviteID} of ${cards} cards added in ${moment} by ( ${userID}, ${name} )`);
        })
        .on('noMoreCards', (logger) => {
            console.log('-- No more tickets fired --');
            logger.write('Adding invitation failed because tickets were running out');
        })
        .on('getAll', (logger) => {
            console.log('-- Get all fired --');
            logger.write('Admin asked for all cards');
        })
        .on('getLog', (logger) => {
            console.log('-- Get log fired --');
            logger.write('Admin asked for get log file');
        })
        .on('accessBlocked', (id, logger) => {
            console.log('-- Access blocked fired --');
            logger.write(`Access blocked for user id: ${id}`);
        })
        .on('userIsNotExist', (id, logger) => {
            console.log('-- User is not exist fired --');
            logger.write(`User id: ${id} is not exist/suitable`);
        })
        .on('deleteAll', (logger) => {
            console.log('-- Delete all tickets fired --');
            logger.write('Admin deleted all invitations');
        })
        .on('deleteOne', (inviteID, logger) => {
            console.log('-- Delete one ticket fired --');
            logger.write(`Invitation ${inviteID} has beed deleted`);
        })
        .on('updateInvitation', (inviteID, cardsAfter, nameAfter, logger) => {
            console.log('-- Update invitation fired --');
            logger.write(`Invitation: ${inviteID} has been changed, name: ${nameAfter}, cards: ${cardsAfter}`);
        })
        .on('notEnoughCards', (id, cardBefore, cardAfter, logger) => {
            console.log('-- Not enough tickets fired --');
            logger.write(`Invitation: ${id} cant update amount from ${cardBefore} to ${cardAfter} because there is not enough tickets`);
        })
        .on('inviteIsNotExist', (inviteID, logger) => {
            console.log('-- Invitation is not exist fired --');
            logger.write(`Invitation: ${inviteID} is not exist`);
        })
    return InvitesRepo;
}