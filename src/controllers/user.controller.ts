import { Controller, Get } from '@nestjs/common';
import { USERS } from '../database/users';
import { User } from '../interfaces/data.interface';

@Controller('users')
export class UserController {
  @Get()
  findAll(): User[] {
    return USERS;
  }
}
