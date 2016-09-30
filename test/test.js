var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var Book = require('../routes/user');

// This line was not included in tutorial, before this line
// chai.request (...) was not a function of chai
chai.use(chaiHttp);

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

describe('About Page', function () {
	describe('About Page has started', function () {
		it ('About Page has started', function  () {
			chai.request(server)
            .get('/about')
            .end((err, res) => {
                res.should.have.status(200);
            	done();
            });
		});
	});
});