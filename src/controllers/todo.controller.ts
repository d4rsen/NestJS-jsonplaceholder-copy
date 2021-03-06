import { Controller, Get } from '@nestjs/common';
import { Todo } from '../interfaces/data.interface';
import { TODOS } from '../database/todos';

@Controller('todos')
export class TodoController {
  @Get()
  findAll(): Todo[] {
    return TODOS;
  }
}
