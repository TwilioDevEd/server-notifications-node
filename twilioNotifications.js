var twilioClient = require('./twilioClient');
var fs = require('fs');
var _ = require('underscore');

module.exports.notifyOnError = function(appError) {
  fs.readFile('./config/administrators.json', 'utf8', function(readError, fileData) {
    if (readError) {
      console.error('Could not read administrators file: ' + readError.toString());
    } else {
      var admins = JSON.parse(fileData);

      _.each(admins, function(admin) {
        twilioClient.sendSms(admin.phoneNumber, appError.message);
      });
    }
  });
};
