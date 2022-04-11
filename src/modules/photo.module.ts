import { Module } from '@nestjs/common';
import { PhotoService } from '../services/photo.service';
import { PhotoController } from '../controllers/photo.controller';

@Module({
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
