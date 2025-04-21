import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePhotoRequestDTO {
  @Field({ nullable: true })
  @IsString()
  public imageUrl?: string;
}
