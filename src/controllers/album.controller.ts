import { Controller, Get } from '@nestjs/common';
import { Album } from '../interfaces/data.interface';
import { ALBUMS } from '../database/albums';

@Controller('albums')
export class AlbumController {
  @Get()
  findAll(): Album[] {
    return ALBUMS;
  }
}
