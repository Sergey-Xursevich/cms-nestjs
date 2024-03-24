import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async findOne(id: number): Promise<Comment> {
    return await this.commentRepository.findOneBy({ id });
  }

  async create(comment: Comment): Promise<Comment> {
    return await this.commentRepository.save(comment);
  }

  async update(id: number, comment: Comment): Promise<Comment> {
    await this.commentRepository.update(id, comment);
    return await this.commentRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
