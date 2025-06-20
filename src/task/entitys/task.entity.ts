import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from '../status/task-status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({ default: 'pending', type: 'enum', enum: TaskStatus })
  status: TaskStatus;
}
