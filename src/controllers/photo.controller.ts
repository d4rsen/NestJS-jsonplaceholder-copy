import { Controller, Get } from '@nestjs/common';
import { Photo } from '../interfaces/data.interface';
import { PHOTOS } from '../database/photos';

@Controller('photos')
export class PhotoController {
  @Get()
  findAll(): Photo[] {
    return PHOTOS;
  }
}
