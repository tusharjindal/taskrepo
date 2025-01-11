import { Controller, Post, Req } from '@nestjs/common';
import { TaskService } from './task.service';
import { v4 as uuidv4 } from 'uuid';
import { Request } from 'express';

@Controller()
export class TaskController{
  constructor(private readonly taskService: TaskService) {}

  @Post('/makeTask')
  makeASchedule(@Req() request: Request) {
    try{
        console.log(request.body);
        //this.taskService.makeEntry({id : uuidv4(), duration : duration, listOfDependency : listOfDependency});
    }catch(error){

        //can log error using logger like winston, pino
        console.log(error); 
    }
  }
}
