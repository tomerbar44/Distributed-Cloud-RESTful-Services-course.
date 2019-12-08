const { EventEmitter } = require('events');
const usersJson = require('./data/users.json');


class InvitesRepository extends EventEmitter {
    constructor() {
        super();
        this._users = usersJson;
        this._numOfCards = 10;
        this._invitesObjects = {};
    }

    getInvitation(body, logger) {
        const newInvite = {
            inviteID: Date.now(),
            moment: new Date(),
            userID: body.id,
            name: body.name,
            cards: body.cards
        };
        this._numOfCards -= newInvite.cards;
        if (this._numOfCards >= 0) {
            this._invitesObjects[newInvite.inviteID] = newInvite;
            this.emit("addInvite", newInvite.inviteID, newInvite.moment, newInvite.userID, newInvite.name, newInvite.cards, logger); // Fire event
            return newInvite;
        } else {
            this.numOfCards += newInvite.cards;
            this.emit("noMoreCards", logger);
            return -1;
        }
    }
    getAll(id, logger) {
        for (let user of this._users) {
            if (user.id == id) {
                if (user.isAdmin == "true") {
                    this.emit("getAll", logger); // Fire event
                    return this._invitesObjects;
                } else {
                    this.emit("accessBlocked", id, logger);
                    return -1;
                }
            }
        }
        this.emit("userIsNotExist", id, logger);
        return -1;
    }

    getLog(id, logger) {
        for (let user of this._users) {
            if (user.id == id) {
                if (user.isAdmin == "true") {
                    //this.emit("getAll", logger); // Fire event
                    return logger.getLogFile();
                } else {
                    this.emit("accessBlocked", id, logger);
                    return -1;
                }
            }
        }
        this.emit("userIsNotExist", user.id, logger);
        return -1;
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
                    return -1;
                }
            }
        }
        this.emit("userIsNotExist", id, logger);
        return -1;
    }

    deleteOne(inviteID, logger) {
        if (this._invitesObjects[inviteID] != null) {
            this._numOfCards += this._invitesObjects[inviteID].cards;
            delete this._invitesObjects[inviteID];
            this.emit("deleteOne", inviteID, logger);
            return 1;
        } else {
            this.emit("inviteIsNotExist", inviteID, logger);
            return -1;
        }

    }
    updateInvitation(body, inviteID, logger) {
        if (this._invitesObjects[inviteID] != null) {
            const inviteBefore = this._invitesObjects[inviteID]
            this._numOfCards += this._invitesObjects[inviteID].cards;
            this._numOfCards -= body.cards;
            if (this._numOfCards >= 0) {
                this._invitesObjects[inviteID].cards = body.cards;
                this._invitesObjects[inviteID].name = body.name;
                this._invitesObjects[inviteID].moment = new Date();
                this.emit("updateInvitation", inviteID, inviteBefore.cards, inviteBefore.name, inviteBefore.moment, body.cards, body.name, this._invitesObjects[inviteID].moment, logger);
                return this._invitesObjects[inviteID];
            } else {
                this._numOfCards += body.cards;
                this._numOfCards -= this._invitesObjects[inviteID].cards;
                this.emit("notEnoughCards", inviteID, this._invitesObjects[inviteID].cards, body.cards, logger);
                return -1;
            }
        } else {
            this.emit("inviteIsNotExist", inviteID, logger);
            return -1;
        }

    }

}

module.exports = () => {
    const InvitesRepo = new InvitesRepository()
        .on('addInvite', (inviteID, moment, userID, name, cards, logger) => {
            console.log('*add invite fired*')
            logger.write(`Reservation ${inviteID} included ${cards} cards added in ${moment} by ( ${userID}, ${name} )`)
        })
        .on('getAll', (logger) => {
            console.log('*get all fired*')
            logger.write('Admin asked for all cards')
        })
        .on('deleteAll', (logger) => {
            console.log('*delete all tickets fired*')
            logger.write('Admin deleted all reservations')
        })
        .on('deleteOne', (inviteID, logger) => {
            console.log('*delete one ticket fired*')
            logger.write(`Reservation ${inviteID} has beed deleted`)
        })
        .on('updateInvitation', (inviteID, cardsBefore, nameBefore, momentBefore, cardsAfter, nameAfter, dateAfter, logger) => {
            console.log('*update invitation fired*')
            logger.write(`Reservation ${inviteID} has been changed from name: ${nameBefore} to ${nameAfter}, cards: ${cardsBefore} to ${cardsAfter}, date:${momentBefore} to ${dateAfter} `)
        })
        .on('noMoreCards', (logger) => {
            console.log('*no more tickets fired*')
            logger.write('There is not enough tickets.')
        })
        .on('notEnoughCards', (id, cardBefore, cardAfter, logger) => {
            console.log('*not enough tickets fired*')
            logger.write(`Reservation id: ${id} cant update amount from ${cardBefore} to ${cardAfter} because there is not enough tickets`)
        })
        .on('accessBlocked', (id, logger) => {
            console.log('*Access blocked fired*')
            logger.write(`Access blocked for user id: ${id}`)
        })
        .on('userIsNotExist', (id, logger) => {
            console.log('*User is not exist fired*')
            logger.write(`User id: ${id} is not exist`)
        })
        .on('inviteIsNotExist', (id, logger) => {
            console.log('*Invitation is not exist fired*')
            logger.write(`Reservation: ${id} is not exist`)
        })
    return InvitesRepo;
}













// const InvitesRepo = new InvitesRepository();
// const InvitesRepo = (new InvitesRepository())
// .on('addInvite', (inviteID, moment, userID, name, cards, logger) => {
//     console.log('*add ticket fired*')
//     logger.write(`Invitation ${newInvite.inviteID} included ${newInvite.cards} added in ${newInvite.moment} by ${newInvite.userID}, ${newInvite.name}`)
//   });




// .on('addInvite', data => console.log(`Invitation added: ${data}`, logger.write(`Invitation ${data.inviteID} included ${data.cards} added in ${data.moment} by ${data.userID}, ${data.name}`))); // Catch event

// const InvitesRepo = new InvitesRepository();
// module.exports = InvitesRepo;


// getSong(id) {
//     this.emit("singleSong", this._songs[id - 1]); // Fire event

//     return this._songs[id - 1];
// }


// const songsRepo = (new SongsRepository())
//     .on('singleSong', data => console.log(`Get single song: ${data.song}`)); // Catch event