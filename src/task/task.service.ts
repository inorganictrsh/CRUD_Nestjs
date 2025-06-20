import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entitys/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  @InjectRepository(Task)
  private readonly taskRepository: Repository<Task>;

  // Add methods to interact with the taskRepository here, e.g., create, find, update, delete tasks.

  async createTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async updateTask(id: number, task: Partial<Task>): Promise<Task> {
    const existingTask = await this.taskRepository.findOneBy({ id });
    if (!existingTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    const updatedTask = Object.assign(existingTask, task);
    return this.taskRepository.save(updatedTask);
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }
}
