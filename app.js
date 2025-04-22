import cors from 'cors';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// work around middleware to use express v5 and apollo express v4
app.use((req, res, next) => {
  req.body = req.body || {};
  next();
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Simple NodeJS app with GraphQL</h1>
    <a href='/graphql'>GraphQL Sandbox</a>
    `);
});

await server.start();

app.use('/graphql', expressMiddleware(server));

app.listen(PORT, async () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
