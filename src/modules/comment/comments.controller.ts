import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async findAll(): Promise<Comment[]> {
    return await this.commentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Comment> {
    return await this.commentsService.findOne(id);
  }

  @Post()
  async create(@Body() comment: Comment): Promise<Comment> {
    return await this.commentsService.create(comment);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() comment: Comment,
  ): Promise<Comment> {
    return await this.commentsService.update(id, comment);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.commentsService.delete(id);
  }
}
