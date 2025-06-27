import { Task } from 'src/task/entitys/task.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  @Column()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
