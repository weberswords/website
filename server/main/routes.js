var express = require('express');
var router = express.Router();
var pool = require('./db');

router.get('/', (req, res) => {
	res.json('{info: Node.js, Express, and Postgres API}')
})

router.get('/api/hello', (req, res) => {
	res.json('hello world')
})

router.get('/api/allposts', async (req, res, next) => {
	try {
		const result = await pool.query(`SELECT * FROM posts ORDER BY "createdAt" DESC`,
		(query_error, query_result) => {
			console.log(`Making get request...`)
			if (query_error) {
				console.log(`😢 An error has occurred: \n${query_error}`)
				return next(query_error)
			}
			console.log(`Result returned.`)

			return res.json(query_result.rows)
			
		})
	} catch(error) {
		console.log(`Oh no! ${error}`)
		next(error)
	}
	
})

router.post('/api/posts', (req, res, next) => {
	const postPayload = [
		req.body.title,
		req.body.content,
		req.body.uid
	]
 
	pool.query(`INSERT INTO posts(title, content, "userId", "createdAt", "updatedAt") VALUES($1, $2, $3, now(), now())`,
		postPayload, (query_error, query_result) => {
			console.log("Making post request...")
			if(query_error) {
				console.log(`😢 An error has occurred: \n${query_error}`)
				return next(query_error);
			} else {
				console.log(`Result returned.`)
				return res.json(query_result);	
			}
		}
	)
})

router.delete('/api/posts/:postid', (req, res, next) => {
	const postid = req.params.postid
	pool.query(`DELETE FROM posts WHERE id=$1`,
		[postid], (query_error, query_result) => {
			console.log("Making delete request...")
			if(query_error) {
				console.log(`😢 An error has occurred: \n${query_error}`)
				return next(query_error);
			} else {
				console.log(`Result returned.`)
				return res.json(query_result);	
			}
		}
	)
})

module.exports = router