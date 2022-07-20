const { gql } = require("apollo-server");

module.exports = gql`
	type Person {
		id: Int!
		name: String!
		lastName: String!
		mothersLastName: String!
		address: String!
		phone: String!
	}

	extend type Query {
		getAllPerson: [Person!]
		getSinglePerson(personId: Int!): Person
	}

	extend type Mutation {
		create(input: CreateInput!): CreateResponse
	}

	type CreateResponse {
		id: Int!
		name: String!
		lastName: String!
		mothersLastName: String!
		address: String!
		phone: String!
	}

	input CreateInput {
		name: String!
		lastName: String!
		mothersLastName: String!
		address: String!
		phone: String!
	}
`;
