import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloResover {
  @Query(() => String)
  hello() {
    return 'Hello';
  }
}
