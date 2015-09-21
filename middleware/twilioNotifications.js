var twilioClient = require('../twilioClient');
var fs = require('fs');
var _ = require('underscore');

var formatMessage = function(errorToReport) {
  return '[This is a test] ALERT! It appears the server is' +
    'having issues. Exception: ' + errorToReport +
    '. Go to: http://newrelic.com' +
    'for more details.';
};

module.exports.notifyOnError = function(appError, request, response, next) {
  fs.readFile('./config/administrators.json', 'utf8', function(readErr, data) {
    if (readErr) {
      console.error('Could not read administrators file: ' +
                    readErr.toString());
    } else {
      var admins = JSON.parse(data);

      _.each(admins, function(admin) {
        var messageToSend = formatMessage(appError.message);
        twilioClient.sendSms(admin.phoneNumber, messageToSend);
      });
    }
  });
  next();
};
