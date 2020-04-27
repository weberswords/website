var express = require('express');
var router = express.Router();
var pool = require('./db');

router.get('/', (req, res) => {
	res.json('{info: Node.js, Express, and Postgres API}')
})

router.get('/api/hello', (req, res) => {
	res.json('hello world')
})

router.get('/api/allposts', (req, res, next) => {
	pool.query(`SELECT * FROM posts ORDER BY date_created DESC`,
		(query_error, query_result) => {
			console.log("Making request...")
			if (query_error) {
				console.log(`😢 An error has occurred: \n ${query_error}`)
			}
			console.log(`Result returned.`)
			if (query_result.rows) {
				res.json(query_result.rows)	
			} else {
				res.json(query_result)
			}
			
	})
})

router.post('/api/posts', (req, res, next) => {
	const postPayload = [
		req.body.title,
		req.body.body,
		req.body.uid,
		req.body.username
	]

	console.log(postPayload);
 
	pool.query(`INSERT INTO posts(title, body, user_id, author, date_created) VALUES($1, $2, $3, $4, NOW())`,
		postPayload, (query_error, query_result) => {
			if(query_error) {
				console.log(`😢 An error has occurred: \n ${query_error}`)
				return next(query_error);
			}
			console.log(`Result returned.`)
			if (query_result.rows) {
				res.json(query_result.rows)
			} else {
				res.json(query_result)
			}
		})
})

module.exports = router