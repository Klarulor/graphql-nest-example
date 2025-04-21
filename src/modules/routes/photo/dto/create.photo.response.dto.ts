import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class CreatePhotoResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;
}
