import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user.module';
import { PostModule } from '../modules/post.module';
import { CommentModule } from '../modules/comment.module';
import { AlbumModule } from '../modules/album.module';
import { PhotoModule } from '../modules/photo.module';
import { TodoModule } from '../modules/todo.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    CommentModule,
    AlbumModule,
    PhotoModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
