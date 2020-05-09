const { Pool } = require('pg')

const db = () => {
	switch(process.env.NODE_ENV){
		case "production":
			return 'prod_db';
			break;
		case "test":
			return 'test_db';
			break;
		case "ci":
			return 'circle_test';
			break;
		default:
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