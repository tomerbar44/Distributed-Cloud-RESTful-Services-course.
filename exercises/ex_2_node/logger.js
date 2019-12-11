const Moment = require('moment')
class Logger {
    constructor() {
        this._logFile = '';
    }
    write(description) {
        this._logFile += `${new Moment().format()}: \t  ${description} \n`;
    }
    getLogFile() {
        return this._logFile;
    }
}
module.exports = () => {
    const objLogger = new Logger();
    return objLogger;
}