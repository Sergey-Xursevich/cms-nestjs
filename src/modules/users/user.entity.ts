import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Comment } from '../comment/comment.entity';
import { Role } from './role.entity';
import {
  IsNotEmpty,
  IsEmail,
  IsAlpha,
  Length,
  IsAlphanumeric,
  Min,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Length(0, 30)
  @IsAlpha()
  username: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Min(8)
  password: string;

  @Column({ nullable: true })
  roleId: number;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
