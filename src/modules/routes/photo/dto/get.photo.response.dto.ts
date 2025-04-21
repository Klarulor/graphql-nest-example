import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { Photo } from '../../../../entities/Photo';

@ObjectType()
export class GetPhotoResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;

  @Field({ nullable: true })
  @IsString()
  public imageUrl?: string;

  public static create(photo: Photo): GetPhotoResponseDTO {
    const instance = new GetPhotoResponseDTO();
    instance.id = photo.id;
    instance.imageUrl = photo.imageUrl;
    return instance;
  }
}
