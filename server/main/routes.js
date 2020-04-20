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
				console.log(`An error has occurred: \n ${query_error}`)
			}
			console.log(`Result returned.`)
			res.json(query_result.rows)
	})
})

module.exports = router