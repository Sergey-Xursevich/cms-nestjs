import { Module } from '@nestjs/common';
import { CommentsModule } from './modules/comment/comments.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CommentsModule, TasksModule, UsersModule],
})
export class AppModule {}
