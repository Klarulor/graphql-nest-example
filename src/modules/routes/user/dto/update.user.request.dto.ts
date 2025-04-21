import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Validate, IsOptional } from 'class-validator';
import { InlineValidator } from '../../../../middleware/validators/InlineValidator';
import { trimToEnglish } from '../../../../bin/utils/stringUtils';

@InputType()
export class UpdateUserRequestDTO {
  @Field({ nullable: true })
  @IsString()
  @IsEmail()
  @IsOptional()
  public email?: string;

  @Field({ nullable: true })
  @IsString()
  @Validate(InlineValidator, [(x: string) => trimToEnglish(x) === x])
  @IsOptional()
  public username?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  public rawPassword?: string;
}
