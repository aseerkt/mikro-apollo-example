import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import express from 'express';
import { MikroORM } from '@mikro-orm/core';
import { buildSchema } from 'type-graphql';
import { __prod__ } from './constants';
import path from 'path';

async function main() {
  const orm = await MikroORM.init();
  await orm.getMigrator().up();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [path.join(__dirname, './resolvers/**/*.{t,j}s')],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
    plugins: [
      __prod__
        ? ApolloServerPluginLandingPageProductionDefault
        : ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () =>
    console.log(`GraphQL API: http://localhost:${PORT}/graphql`)
  );
}

main().catch(console.error);
