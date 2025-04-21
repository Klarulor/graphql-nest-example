import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponseDTO {
  @Field()
  access_token: string;
}
