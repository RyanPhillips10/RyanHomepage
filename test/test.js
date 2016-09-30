var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var Book = require('../routes/user');
console.log (chai);

chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('users API', function () {
	describe('users API started', function () {
		it ('user API should succeed', function  () {
			chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
            	done();
            });
		});
	});
});

describe('Main Page', function () {
	describe('Main Page has started', function () {
		it ('Main Page has started', function  () {
			chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
            	done();
            });
		});
	});
});