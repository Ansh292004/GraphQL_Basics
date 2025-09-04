// ============== GRAPHQL SCHEMA DEFINITIONS ==============
export const typeDefs = `#graphql

    # Game type
    type Game {
        id: ID! 
        title: String! 
        platform: [String!]!
        reviews: [Review!]
    }

    # Review type
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    # Author type
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # Queries → fetch data
    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }

    # Mutations → modify data
    type Mutation {
        addGame(game: addGameInput!): Game
        updateGame(id: ID!, updatedData: updateGameInput!): Game
        deleteGame(id: ID!): [Game]
    }

    # Input for adding a new game
    input addGameInput {
        title: String!
        platform: [String!]!
    }

    # Input for updating an existing game
    input updateGameInput {
        title: String
        platform: [String!]
    }

`
