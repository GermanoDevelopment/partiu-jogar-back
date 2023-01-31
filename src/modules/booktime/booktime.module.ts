import { Module } from '@nestjs/common';
import { BooktimeService } from './booktime.service';
import { BooktimeController } from './booktime.controller';

@Module({
  controllers: [BooktimeController],
  providers: [BooktimeService]
})
export class BooktimeModule {}
