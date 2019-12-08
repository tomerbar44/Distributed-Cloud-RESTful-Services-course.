const Moment = require('moment')
class Logger {
    constructor() {
        this._logFile = '';
    }

    write(description) {
        this._logFile += `'\n'${new Moment().format()}:\t  ${description}`;
    }

    getLogFile() {
        console.log('*get log fired*')
        return this._logFile
    }
}
module.exports = () => {
    const myLogger = new Logger()
    return myLogger
}