import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNumber, Min, Max } from 'class-validator';

@InputType()
export class UpdateRatingRequestDTO {
  @Field(() => Int)
  @IsNumber()
  @Min(1)
  @Max(5)
  public rating: number;
}
