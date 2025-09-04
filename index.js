// ============== IMPORTS & CONFIGURATION ==============

// Loads environment variables from .env file into process.env
import dotenv from "dotenv";
dotenv.config();

// Apollo Server core package (used to create the GraphQL server instance)
import { ApolloServer } from '@apollo/server';

// Helper function that allows running Apollo Server without needing Express
// (starts the server in "standalone" mode)
import { startStandaloneServer } from '@apollo/server/standalone';

// GraphQL schema definitions (typeDefs) — defines types, queries, and mutations
import { typeDefs } from './schema.js';

// Mock database (db.js file) that stores in-memory data for games, reviews, and authors
import db from './db.js';

const PORT = process.env.PORT || 3000;

const resolvers={
    // ================= QUERIES =================
    Query:{
        games(){
            return db.games
        },
        
        authors(){
            return db.authors
        },

        reviews(){
            return db.reviews
        },

        review(_,args){
            return db.reviews.find((review)=>review.id===args.id)
        },

        game(_,args){
            return db.games.find((game)=>game.id===args.id)
        },

        author(_,args){
            return db.authors.find((author)=>author.id===args.id)
        }
    },

    // ============== FIELD RESOLVERS ==============
    Game:{
        reviews(parent){
            return db.reviews.filter((review)=>review.game_id===parent.id)
        }
    },

    Author:{
        reviews(parent){
            return db.reviews.filter((review)=>review.game_id===parent.id)
        }
    },

    Review:{
        author(parent){
            return db.authors.find((author)=>author.id===parent.id)
        },
        game(parent){
            return db.games.find((game)=>game.id===parent.game_id)
        }
    },

    // ============== MUTATIONS ==============
    Mutation:{
        deleteGame(_,args){
            db.games=db.games.filter((game)=>game.id!==args.id)
            return db.games
        },

        addGame(_,args){
            let game={
                ...args.game,
                id: Math.floor(Math.random()*10000).toString()
            }
            db.games.push(game)
            return game
        },

        updateGame(_,args){
            db.games=db.games.map((game)=>{
                if(game.id===args.id){
                    return{...game,...args.updatedData}
                }
                return game
            })
            return db.games.find((game)=>game.id===args.id)
        }
    }
}

const server=new ApolloServer({
    typeDefs,
    resolvers
});

const {url} = await startStandaloneServer(server,{
    listen:{port:PORT}  //startStandaloneServer expects the property name to be port (lowercase), not PORT.
})

console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);





/*SUMMARY-------------------------------------------------------------------------------------

->ESM(ES Module)-> (import/export) → "type": "module", .js files
->CJS(CommonJS)-> (require/module.exports) → no "type": "module", or .cjs files(eg. index.js --> index.cjs)

*/