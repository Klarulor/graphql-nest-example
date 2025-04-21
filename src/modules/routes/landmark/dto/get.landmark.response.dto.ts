import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString, IsOptional } from 'class-validator';
import { SimpleCountry } from '../../../../entities/simplified/SimpleCountry';
import { GetPhotoResponseDTO } from '../../photo/dto/get.photo.response.dto';
import { Landmark } from '../../../../entities/Landmark';

@ObjectType()
export class GetLandmarkResponseDTO {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  geo: string;

  // @Field(() => SimpleCountry)
  // country: SimpleCountry;

  @Field(() => [GetPhotoResponseDTO])
  photos: GetPhotoResponseDTO[];

  @Field({ nullable: true })
  imageUrl?: string;

  public static async create(landmark: Landmark): Promise<GetLandmarkResponseDTO> {
    const photos = (await landmark.photos).map(GetPhotoResponseDTO.create);

    return {
      id: landmark.id,
      name: landmark.name,
      description: landmark.description,
      geo: landmark.geo,
     // country: SimpleCountry.create(landmark.country), // Ensure this returns a proper SimpleCountry instance
      imageUrl: landmark.imageUrl,
      photos: photos,
    };
  }
}
