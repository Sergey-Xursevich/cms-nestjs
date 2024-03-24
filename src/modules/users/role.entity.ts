import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { IsEnum } from 'class-validator';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEnum({ User: 0, Author: 1, Admin: 2 })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
