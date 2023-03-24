import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BooktimeService } from './booktime.service';
import { BooktimeController } from './booktime.controller';
import { Booktime } from './entities/booktime.entity';
import { UserModule } from '../user/user.module';
import { SupervisorModule } from '../supervisor/supervisor.module';
import { CourtModule } from '../court/court.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booktime]),
    UserModule,
    CourtModule,
    SupervisorModule,
  ],
  controllers: [BooktimeController],
  providers: [BooktimeService],
  exports: [BooktimeService]
})
export class BooktimeModule {}
