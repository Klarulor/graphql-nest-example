import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class CreateUserResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;
}
