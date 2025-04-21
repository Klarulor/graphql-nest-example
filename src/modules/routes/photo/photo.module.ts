import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoResolver } from './photo.controller';

@Module({
  providers: [PhotoService, PhotoResolver]
})
export class PhotoModule{}