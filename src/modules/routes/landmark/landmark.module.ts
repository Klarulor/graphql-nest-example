import { Module } from '@nestjs/common';
import { LandmarkService } from './landmark.service';
import { LandmarkResolver } from './landmark.controller';

@Module({
  providers: [LandmarkService, LandmarkResolver],
})
export class LandmarkModule{}