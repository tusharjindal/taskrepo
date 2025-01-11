import { Injectable,Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';
const TASK_PICK_LIMIT = 5;

@Injectable()
export class TasksSchedule {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache){}
  private srh:any[] = [];

  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
   console.log("------------------------ inside cron to handle my all tasks--------------------");

    for(let i = 0; i<this.srh.length; i++){
      console.log("staring to execute task with id: ", this.srh[i]);
      let data = await this.cacheManager.get(this.srh[i]);
      console.log("Task data data is", data);
      

      

      await this.cacheManager.del(this.srh[i]);
      delete this.srh[i];
    }

  }

  getTaskIds(taskId: string){
    this.srh.push(taskId);
  }
}
