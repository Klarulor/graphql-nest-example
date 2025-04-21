import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../../middleware/guards/AuthGuard';
import { UserService } from './user.service';
import { GetUserResponseDTO } from './dto/get.user.response.dto';
import { CreateUserResponseDTO } from './dto/create.user.response.dto';
import { CreateUserRequestDTO } from './dto/create.user.request.dto';
import { UpdateUserResponseDTO } from './dto/update.user.response.dto';
import { UpdateUserRequestDTO } from './dto/update.user.request.dto';
import { BlankDTO } from '../../../bin/dto/blank-dto';
import { UserInput } from '../../../objectTypes/UserRequest';

@Resolver()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Query(() => [GetUserResponseDTO])
  @UseGuards(AuthGuard)
  public async getAll(): Promise<GetUserResponseDTO[]> {
    return this.userService.getAll();
  }

  @Mutation(() => CreateUserResponseDTO)
  @UseGuards(AuthGuard)
  public async create(
    @Args('dto') dto: CreateUserRequestDTO
  ): Promise<CreateUserResponseDTO> {
    return this.userService.create(dto);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async update(
    @Args('id') id: number,
    @Args('dto') dto: UpdateUserRequestDTO
  ): Promise<boolean> {
    await this.userService.update(id, dto);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  public async delete(@Args('id') id: number): Promise<boolean> {
    await this.userService.delete(id);
    return true;
  }
}
