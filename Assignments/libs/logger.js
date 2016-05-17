var winston = require('winston');

var Logger = new (winston.Logger)({
    transports: [
      //new (winston.transports.Console)(),
      new winston.transports.File({
        level: 'info',
        filename: 'info.log'
      })
    ]
  });

module.exports = Logger;
