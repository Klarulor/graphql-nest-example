import { InputType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString, Min } from 'class-validator';

@InputType()
export class CreateLandmarkRequestDTO {
  @Field()
  @IsString()
  public name: string;

  @Field()
  @IsString()
  public description: string;

  @Field()
  @IsString()
  public geo: string;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  public country_id: number;

  @Field(() => [Int], { nullable: true })
  @IsArray()
  public photo_ids?: number[];

  @Field(() => [Int], { nullable: true })
  @IsArray()
  public ratings_ids?: number[];
}
