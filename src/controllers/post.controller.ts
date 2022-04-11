import { Controller, Get } from '@nestjs/common';
import { Post } from '../interfaces/data.interface';
import { POSTS } from '../database/posts';

@Controller('posts')
export class PostController {
  @Get()
  findAll(): Post[] {
    return POSTS;
  }
}
