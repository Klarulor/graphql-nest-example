import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, Min, Max } from 'class-validator';

@InputType()
export class CreateRatingRequestDTO {
  @Field()
  @IsNumber()
  @Min(1)
  @Max(5)
  public rating: number;
}
