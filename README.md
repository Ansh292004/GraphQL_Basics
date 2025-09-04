
🎮 GraphQL Games API

A simple GraphQL API built with Apollo Server and Node.js.
This demonstrates how to define schemas, write resolvers, and use queries/mutations to manage data.
For simplicity, the data is stored in an in-memory database (db.js).
-------------------------------------------------------------------------------------------------------------------------------------------
 Features--------------

 ->Query all games, reviews, and authors
 ->Fetch a single game/review/author by ID
 ->Mutations: add, update, and delete games
```
## Structure
📦 diveGraph
 ┣ 📜 index.js       # Apollo Server + resolvers
 ┣ 📜 schema.js      # GraphQL type definitions
 ┣ 📜 db.js          # In-memory mock database
 ┣ 📜 package.json
 ┗ 📜 .env           # Environment variables
```
------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Setup & Run

1.Clone the repository:

->git clone https://github.com/your-username/diveGraph.git
->cd diveGraph


2.Install dependencies:

->npm install


3.Create a .env file:

->PORT=available local port


4>Start the server:

->node index.js
------------------------------------------------------------------------------------------------------------------------------------------------

Server runs at:
👉 http://localhost:8000
