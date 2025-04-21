import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Validate } from 'class-validator';
import { InlineValidator } from '../../../../middleware/validators/InlineValidator';
import { trimToEnglish } from '../../../../bin/utils/stringUtils';

@InputType()
export class CreateUserRequestDTO {
  @Field()
  @IsString()
  @IsEmail()
  public email: string;

  @Field()
  @IsString()
  @Validate(InlineValidator, [(x: string) => trimToEnglish(x) === x])
  public username: string;

  @Field()
  @IsString()
  public rawPassword: string;
}
