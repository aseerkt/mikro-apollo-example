import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Post {
  @Field()
  @PrimaryKey()
  id: number;

  @Field()
  @Property({ type: 'text' })
  title: string;

  @Field(() => Date)
  @Property({ type: 'date' })
  createdAt: Date = new Date();

  @Field(() => Date)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
