import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerUtilModule } from './utils/swagger/swagger.module';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from './utils/typeorm/typeorm.module';
import { AuthModule } from './routes/auth/auth.module';
import { UserModule } from './routes/user/user.module';
import { LandmarkModule } from './routes/landmark/landmark.module';
import { PhotoModule } from './routes/photo/photo.module';
import { RatingModule } from './routes/rating/rating.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [SwaggerUtilModule, TypeormModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
      installSubscriptionHandlers: true
    }),
    AuthModule, UserModule, LandmarkModule, PhotoModule, RatingModule,
    ConfigModule.forRoot({envFilePath: ".env"})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
