import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BooktimeService } from './booktime.service';
import { BooktimeController } from './booktime.controller';
import { Booktime } from './entities/booktime.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booktime])],
  controllers: [BooktimeController],
  providers: [BooktimeService],
  exports: [BooktimeService]
})
export class BooktimeModule {}
