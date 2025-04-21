import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { Rating } from '../../../../entities/Rating';

@ObjectType()
export class GetRatingResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;

  @Field(() => Int)
  @IsNumber()
  public creator_id: number;

  @Field(() => Int)
  @IsNumber()
  public rating: number;

  public static create(rating: Rating): GetRatingResponseDTO {
    const instance = new GetRatingResponseDTO();
    instance.id = rating.id;
    instance.creator_id = rating.creator?.id as number;
    instance.rating = rating.rating;
    return instance;
  }
}
