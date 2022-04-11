import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res) {
    res.send(
      'Available routes: /albums, /comments, /photos, /posts, /todos, /users',
    );
  }
}
