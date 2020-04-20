var chai = require('chai');
var assert = chai.assert;
var should = chai.should;
var expect = chai.expect;
var request = require('supertest');
var app = require('../main/app');

describe('Hello world', function() {
	describe('GET hello world', function () {
		it('should return hello world', function (done) {
			request(app)
				.get('/api/hello')
				.expect(200, done)
		})
	})
})

describe('Posts', function () {
	describe('GET posts', function () {
		it('should return 200', function (done) {
			request(app)
				.get('/api/allposts')
				.expect(200, done)
		});

		//should have content in result body
		it('should have content in the result body', function (done) {
			request(app)
				.get('/api/allposts')
				.expect(200)
				.expect('Content-type', /json/)
				.end((err, res) => {
					expect(res).not.to.be.undefined;
					expect(res).to.be.an('object');
					done();
				});
		})
	})
})