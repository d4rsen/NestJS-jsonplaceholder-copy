import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res) {
    res.sendFile(`${process.env.PWD}/src/index.html`);
  }
}
