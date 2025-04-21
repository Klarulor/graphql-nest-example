import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { GetPhotoResponseDTO } from './dto/get.photo.response.dto';
import { CreatePhotoRequestDTO } from './dto/create.photo.request.dto';
import { CreatePhotoResponseDTO } from './dto/create.photo.response.dto';
import { UpdatePhotoRequestDTO } from './dto/update.photo.request.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../../middleware/guards/AuthGuard';
import { IUserRequest } from '../../../bin/interfaces/IUserRequest';
import { User } from '../../../entities/User'; // Assuming you have a User entity

@Resolver(() => GetPhotoResponseDTO)
export class PhotoResolver {
  constructor(private photoService: PhotoService) {}

  @Query(() => [GetPhotoResponseDTO])
  @UseGuards(AuthGuard)
  public async getAll(): Promise<GetPhotoResponseDTO[]> {
    return this.photoService.getAll();
  }

  @Mutation(() => CreatePhotoResponseDTO)
  @UseGuards(AuthGuard)
  public async create(
    @Args('dto') dto: CreatePhotoRequestDTO,
  ): Promise<CreatePhotoResponseDTO> {
    return this.photoService.create(dto, null);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('dto') dto: UpdatePhotoRequestDTO,
  ): Promise<boolean> {
    await this.photoService.update(id, dto, null);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async delete(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    await this.photoService.delete(id, null);
    return true;
  }
}
