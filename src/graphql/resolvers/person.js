// graphql/resolvers/user.js

const { Person } = require("../../database/models");

module.exports = {
	Mutation: {
		async create(root, args, context) {
			console.log(Person);
			const { name, lastName, mothersLastName, address, phone } = args.input;
			return Person.create({ name, lastName, mothersLastName, address, phone });
		},
	},
};
