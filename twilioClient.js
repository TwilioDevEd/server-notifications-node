var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

module.exports.sendSms = function(to, message) {
  client.messages.create({
    body: message,
    to: to,
    from: config.sendingNumber,
    mediaUrl: imageUrl
  }).then(function(data) {
    console.log('Administrator notified');
  }).catch(function(err) {
    console.error('Could not notify administrator');
    console.error(err);
  });
};
