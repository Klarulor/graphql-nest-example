import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsDefined, IsString, Length, IsEmail, Validate } from 'class-validator';
import { InlineValidator } from '../../../../middleware/validators/InlineValidator';
import { trimToEnglish } from '../../../../bin/utils/stringUtils';

@InputType()
export class RegisterRequestDTO {
  @Field()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Length(5, 30)
  //@Validate(InlineValidator, [(x: string) => trimToEnglish(x) === x])
  public username: string;

  @Field()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Length(1, 50)
  @IsEmail()
  //@Validate(InlineValidator, [(x: string) => trimToEnglish(x, "@_-.") === x])
  public email: string;

  @Field()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  public rawPassword: string;
}
