var assert = require('chai').assert;
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