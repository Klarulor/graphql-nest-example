import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { User } from '../../../../entities/User';

@ObjectType()
export class GetUserResponseDTO {
  @Field(() => Int)
  @IsNumber()
  public id: number;

  @Field()
  @IsString()
  public username: string;

  @Field()
  @IsString()
  public email: string;

  public static generate(user: User): GetUserResponseDTO {
    const dto = new GetUserResponseDTO();
    dto.id = user.id;
    dto.username = user.username;
    dto.email = user.email;
    return dto;
  }
}
