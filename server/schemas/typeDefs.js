const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    gameCount: Int
    savedGames: [game]
  }

  type game {
    gameId: ID!
    publisher: [String]
    description: String
    image: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }


  input GameInput {

    publisher: [String]
    description: String!
    gameId: String!
    image: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGame(publisher: String!, description: String!, gameId: String!, image: String!, title: String!): User
    removeGame(gameId: ID!): User
  }
`;

module.exports = typeDefs;
