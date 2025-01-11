import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TasksSchedule } from './cron/runTasks.schedule';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, TasksSchedule]
})
export class TaskModule {}
