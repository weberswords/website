var request = require('supertest');
var app = require('../main/app');

describe('Hello world', () => {
	describe('GET hello world', () => {
		it('should return hello world', async () => {
			const response = await request(app)
				.get('/api/hello')

			expect(response.statusCode).toEqual(200)
			expect(response.body).toEqual('hello world')
		})
	})
})

describe('Posts', () => {
	describe('GET posts', () => {
		it('should have content in the result body', async () => {
			const response = await request(app)
				.get('/api/allposts')
			expect(response.status).toEqual(200)
			expect(response.body).toBeDefined()
		})
	})

	describe('POST posts', () => {
		it('should create a new post', async () => {
			const response = await request(app)
				.post('/api/posts')
				.send({
					title: 'tdd is cool',
					content: 'content',
					uid: 1
				})

			expect(response.statusCode).toEqual(200)
			expect(response.body).toBeDefined()
			
		})
	})

	describe('DELETE posts', () => {
		it('should delete a post', async () => {
			const response = await request(app)
				.delete('/api/posts/1')

			expect(response.status).toEqual(200)
			expect(response.body).toBeDefined()
		})
	})
})
