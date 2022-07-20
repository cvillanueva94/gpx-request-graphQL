// database/config/config.js

require("dotenv").config();

module.exports = {
	development: {
		username: "admin",
		password: "root123.",
		database: "testdb",
		host: "localhost",
		dialect: "mysql",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "postgres",
		host: "127.0.0.1",
		dialect: "postgres",
		use_env_variable: "TEST_DATABASE_URL",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "postgres",
		host: "127.0.0.1",
		dialect: "postgres",
		use_env_variable: "DATABASE_URL",
	},
};
