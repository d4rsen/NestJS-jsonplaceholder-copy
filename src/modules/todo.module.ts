import { Module } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoController } from '../controllers/todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
