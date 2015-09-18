var expect = require('chai').expect;
var supertest = require('supertest');

var app = require('../webapp');
var config = require('../config');

describe('Twilio notifications on error', function() {
  var agent = supertest(app);

  describe('GET /error', function() {
    it('should return an error', function(done) {
      agent
        .get('/error')
        .expect(function(res) {
          expect(res.status).to.equal(500);
        })
        .end(done);
    });
  });
});
