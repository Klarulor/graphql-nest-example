import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SimpleCountry {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
