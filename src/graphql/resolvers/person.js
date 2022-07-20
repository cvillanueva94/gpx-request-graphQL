// graphql/resolvers/user.js

const { Person } = require("../../database/models");

module.exports = {
	Mutation: {
		async create(root, args, context) {
			const { name, lastName, mothersLastName, address, phone } = args.input;
			return Person.create({ name, lastName, mothersLastName, address, phone });
		},
	},
	Query: {
		async getAllPerson(root, args, context) {
			return Person.findAll();
		},
		async getSinglePerson(_, { personId }, context) {
			return Person.findByPk(personId);
		},
	},
};
