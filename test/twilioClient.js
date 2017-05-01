var mockery = require('mockery');
var stub = require('sinon').stub;
var expect = require('chai').expect;

describe('twilioClient', function(){
  var msgCreateStub;

  before(function(){
    mockery.enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false
    });

    msgCreateStub = stub().returns(Promise.resolve({}));

    function TwilioMock() {
      return {
        api: {
          messages: {
            create: msgCreateStub,
          },
        },
      }
    }

    mockery.registerMock('twilio', TwilioMock);
  });

  after(function () {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should send sms message and return promise with result', function() {
   // Arrange
   var twilioClient = require('../twilioClient');
   var toNumber = '+15555555555';
   var message = 'test message';

   // Act
   return twilioClient
    .sendSms(toNumber, message)
    .then(() => {
      // Assert
      expect(msgCreateStub.called).to.be.true;
    });
  });
});
