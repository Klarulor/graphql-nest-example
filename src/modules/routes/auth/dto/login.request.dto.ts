import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class LoginRequestDTO {
  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;
}
