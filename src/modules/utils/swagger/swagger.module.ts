import { Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

@Module({})
export class SwaggerUtilModule {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Ivleva landmarks')
      .setDescription('API Documentation for Landmarks (GraphQL)')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
