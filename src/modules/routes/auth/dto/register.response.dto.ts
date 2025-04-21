import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RegisterResponseDTO {
  @Field()
  access_token: string;
}
