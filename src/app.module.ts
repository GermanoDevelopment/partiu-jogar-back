import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { SchoolModule } from './modules/school/school.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { BooktimeModule } from './modules/booktime/booktime.module';
import { CourtModule } from './modules/court/court.module';

@Module({
  imports: [
    SharedModule,
    SchoolModule,
    ScheduleModule,
    BooktimeModule,
    CourtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}