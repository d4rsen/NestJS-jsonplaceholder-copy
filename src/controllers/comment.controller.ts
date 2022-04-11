import { Controller, Get } from '@nestjs/common';
import { Comment } from '../interfaces/data.interface';
import { COMMENTS } from '../database/comments';

@Controller('comments')
export class CommentController {
  @Get()
  findAll(): Comment[] {
    return COMMENTS;
  }
}
