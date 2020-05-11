const { Pool } = require('pg')

const db = () => {
	switch(process.env.NODE_ENV){
		case "production":
			console.log("Using prod_db");
			return 'prod_db';
			break;
		case "test":
			console.log("Using test_db");
			return 'test_db';
			break;
		case "ci":
			console.log("Using circle_test");
			return 'circle_test';
			break;
		default:
			console.log("Using dev_db");
			return 'dev_db'
	}
}

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: db(),
	password: '',
	post: 5432
})

module.exports = pool