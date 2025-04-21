import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetLandmarkResponseDTO } from './dto/get.landmark.response.dto';
import { LandmarkService } from './landmark.service';
import { CreateLandmarkRequestDTO } from './dto/create.landmark.request.dto';
import { CreateLandmarkResponseDTO } from './dto/create.landmark.response.dto';
import { UpdateLandmarkRequestDTO } from './dto/update.landmark.request.dto';
import { AuthGuard } from '../../../middleware/guards/AuthGuard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class LandmarkResolver {
  constructor(private landmarkService: LandmarkService) {}

  @Query(() => [GetLandmarkResponseDTO])
  @UseGuards(AuthGuard)
  public async getLandmarks(): Promise<GetLandmarkResponseDTO[]> {
    return this.landmarkService.getAll();
  }

  @Mutation(() => CreateLandmarkResponseDTO)
  @UseGuards(AuthGuard)
  public async createLandmark(
    @Args('dto') dto: CreateLandmarkRequestDTO
  ): Promise<CreateLandmarkResponseDTO> {
    return this.landmarkService.create(dto);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async updateLandmark(
    @Args('id') id: number,
    @Args('dto') dto: UpdateLandmarkRequestDTO
  ): Promise<boolean> {
    await this.landmarkService.update(id, dto);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async deleteLandmark(@Args('id') id: number): Promise<boolean> {
    await this.landmarkService.delete(id);
    return true;
  }

  @Query(() => [GetLandmarkResponseDTO])
  @UseGuards(AuthGuard)
  async getFilteredLandmarks(
    @Args('min') min: number,
    @Args('max') max: number
  ): Promise<GetLandmarkResponseDTO[]> {
    return this.landmarkService.getFilteredLandmarks(min, max);
  }

  @Query(() => [GetLandmarkResponseDTO])
  @UseGuards(AuthGuard)
  async getCountryFilteredLandmarks(
    @Args('country_id') country_id: number
  ): Promise<GetLandmarkResponseDTO[]> {
    return this.landmarkService.getCountryFilteredLandmarks(country_id);
  }
}
