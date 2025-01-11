import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TaskModule,
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal : true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
