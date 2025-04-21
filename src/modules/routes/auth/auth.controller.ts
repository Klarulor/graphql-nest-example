import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LoginRequestDTO } from './dto/login.request.dto';
import { LoginResponseDTO } from './dto/login.response.dto';
import { AuthService } from './auth.service';
import { RegisterRequestDTO } from './dto/register.request.dto';
import { RegisterResponseDTO } from './dto/register.response.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  async hello(): Promise<string> {
    return 'Auth!';
  }

  @Mutation(() => LoginResponseDTO)
  async login(@Args('dto') dto: LoginRequestDTO): Promise<LoginResponseDTO> {
    return this.authService.login(dto.username, dto.password);
  }

  @Mutation(() => RegisterResponseDTO)
  async register(@Args('dto') dto: RegisterRequestDTO): Promise<RegisterResponseDTO> {
    return this.authService.register(dto);
  }
}
