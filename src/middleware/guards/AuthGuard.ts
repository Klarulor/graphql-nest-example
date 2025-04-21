import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../modules/utils/entityServices/users.service';
import { User } from '../../entities/User';
import { getConfig } from '../../config/envConfig';
import { IJWTBody } from '../../modules/routes/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = context.switchToHttp().getRequest().graphqlContext;

    const token = this.extractTokenFromContext(gqlContext);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: getConfig().JWT_SECRET }) as IJWTBody;
      const user = await User.findOneBy({ id: payload.id });
      if (!user) {
        throw new UnauthorizedException();
      }

      gqlContext.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromContext(context: any): string | undefined {
    const authorizationHeader = context.req.headers['authorization'];
    const [type, token] = authorizationHeader?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
