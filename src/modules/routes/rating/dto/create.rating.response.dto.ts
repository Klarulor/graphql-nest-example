import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class CreateRatingResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;
}
