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
       // console.log(request.body);
        if(!request.body.duration || !request.body.listOfDependency){
          console.log("bad request");
          return;
        }
        this.taskService.makeEntry({id : uuidv4(), duration : request.body.duration, listOfDependency : request.body.listOfDependency});
    }catch(error){
        console.log(error); 
    }
  }
}
