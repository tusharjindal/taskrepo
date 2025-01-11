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

    let tasks = this.getAllTasksAsPerLimit();
   console.log(tasks,"------------------------ inside cron to handle my all tasks--------------------");

    for(let i = 0; i<tasks.length; i++){
     // console.log("staring to execute task with id: ", tasks[i]);
      let data = await this.cacheManager.get(tasks[i]);
      console.log("Task data data is", data);
      

      
     // console.log("executed task with id: ", tasks[i]);
      await this.cacheManager.del(tasks[i]);
      delete tasks[i];
    }

  }

  getTaskIds(taskId: string){
    this.srh.push(taskId);
  }

  getAllTasksAsPerLimit() : any {
    let task = null;
    if(this.srh.length == 0){
      return [];
    }
    if(this.srh.length <= TASK_PICK_LIMIT){
      task = this.srh;
      return task;
    }else if(this.srh.length > TASK_PICK_LIMIT){
      for(let i = 0; i<TASK_PICK_LIMIT; i++){
        task.push(this.srh[i]);
        delete this.srh[i];
      }
      return task;
    }
  }
}
