var express = require('express');
var router = express.Router();
var pool = require('./db');

router.get('/api/hello', (req, res) => {
	res.json('hello world')
})

router.get('/api/get/allposts', (req, res, next) => {
	pool.query(`SELECT * FROM posts ORDER BY date_created DESC`,
		(query_error, query_result) => {
			res.json(query_result.rows)
		})
})

router.get('/api/get/post', (req, res, next) => {
	const post_id = req.query.post_id

	pool.query(`SELECT * FROM posts WHERE pid=$1`,
		[post_id], (query_error, query_result) => {
			res.json(query_result.rows)
		})
})

module.exports = router