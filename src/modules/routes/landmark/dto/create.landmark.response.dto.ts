import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class CreateLandmarkResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;
}
