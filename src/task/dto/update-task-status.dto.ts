import { IsEnum } from 'class-validator';
import { TaskStatus } from '../status/task-status';
// Ensure that TaskStatus is a valid enum exported from the specified path

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: 'Invalid status',
  })
  status: TaskStatus;
}
