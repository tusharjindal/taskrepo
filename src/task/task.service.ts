import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { Cache } from '@nestjs/cache-manager';
import { TasksSchedule } from './cron/runTasks.schedule';

@Injectable()
export class TaskService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly taskCron: TasksSchedule
  ){}

  async makeEntry(NewTask : any) {
    await this.cacheManager.set(NewTask.id, NewTask, 5400);
    this.taskCron.getTaskIds(NewTask.id)
  }
}
