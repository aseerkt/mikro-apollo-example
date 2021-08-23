import { Options } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';

export default {
  type: 'postgresql',
  entities: ['dist/entities'],
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.ts$/,
  },
  user: 'postgres',
  password: 'postgres',
  dbName: 'test',
  debug: !__prod__,
} as Options;
