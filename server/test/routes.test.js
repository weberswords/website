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

describe('Posts', function () {
	describe('GET posts', function () {
		it('should return 200', function (done) {
			request(app)
				.get('/api/allposts')
				.expect(200, done)
		});

		//should have content in result body
		//should handle empty result
		//should handle timeout
		
	})
})