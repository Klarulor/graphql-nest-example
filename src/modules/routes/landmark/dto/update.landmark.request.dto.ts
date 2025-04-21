import { InputType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class UpdateLandmarkRequestDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  public name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  public description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  public geo?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  public country_id?: number;

  @Field(() => [Int], { nullable: true })
  @IsOptional()
  @IsArray()
  public photo_ids?: number[];

  @Field(() => [Int], { nullable: true })
  @IsOptional()
  @IsArray()
  public ratings_ids?: number[];
}
