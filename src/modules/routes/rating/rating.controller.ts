import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RatingService } from './rating.service';
import { GetRatingResponseDTO } from './dto/get.rating.response.dto';
import { CreateRatingResponseDTO } from './dto/create.rating.response.dto';
import { CreateRatingRequestDTO } from './dto/create.rating.request.dto';
import { UpdateRatingRequestDTO } from './dto/update.rating.request.dto';
import { AuthGuard } from '../../../middleware/guards/AuthGuard';
import { UseGuards } from '@nestjs/common';
import { UserType } from 'src/objectTypes/UserType';

@Resolver(() => GetRatingResponseDTO)
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Query(() => [GetRatingResponseDTO])
  @UseGuards(AuthGuard)
  public async getAll(): Promise<GetRatingResponseDTO[]> {
    return this.ratingService.getAll();
  }

  @Mutation(() => CreateRatingResponseDTO)
  @UseGuards(AuthGuard)
  public async create(
    @Args('dto') dto: CreateRatingRequestDTO,
    // @Args('user') user: UserType,
  ): Promise<CreateRatingResponseDTO> {
    return this.ratingService.create(dto, null as any);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('dto') dto: UpdateRatingRequestDTO,
  ): Promise<boolean> {
    await this.ratingService.update(id, dto);
    return true;  // Returning a boolean
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async delete(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    await this.ratingService.delete(id);
    return true;  // Returning a boolean
  }
}
