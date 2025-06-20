import { IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(1, 100)
  title: string;
  @IsString()
  description: string;
}
