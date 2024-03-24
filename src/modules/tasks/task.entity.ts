import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, Length } from 'class-validator';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Length(0, 50)
  title: string;

  @Column({ nullable: true })
  desription: string;

  @Column({ default: false })
  completed: boolean;
}
