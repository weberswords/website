var chai = require('chai');
var assert = chai.assert;
var should = chai.should;
var expect = chai.expect;
var request = require('supertest');
var app = require('../main/app');

describe('Hello world', () => {
	describe('GET hello world', () => {
		it('should return hello world', (done) => {
			request(app)
				.get('/api/hello')
				.expect(200, done)
		})
	})
})

describe('Posts', () => {
	describe('GET posts', () => {
		it('should return 200', (done) => {
			request(app)
				.get('/api/allposts')
				.expect(200, done)
		});

		//should have content in result body
		it('should have content in the result body', (done) => {
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
	describe('POST posts', () => {
		it('should return 200', (done) => {
			request(app)
				.post('/api/posts')
				.send({
					title: "second post",
					body: "some text bacon",
					uid: "1",
					username: "webs"
				})
				.expect(200)
				.end((err, res) => {
					if (err) done(err);
					expect(res.status).to.equal(200);
					done();
				})
		})
	})
})