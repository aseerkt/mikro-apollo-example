import { EntityManager } from '@mikro-orm/core';

export interface MyContext {
  em: EntityManager;
}
