import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { getConfig } from '../../../config/envConfig';
import { AuthService } from './auth.service';
import { UsersModule } from '../../utils/entityServices/users.module';
import { AuthResolver } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: getConfig().JWT_SECRET,
      signOptions: { expiresIn: getConfig().JWT_EXP },
    })
  ],
  providers: [AuthService, AuthResolver],
  exports: [AuthService]
})
export class AuthModule{}