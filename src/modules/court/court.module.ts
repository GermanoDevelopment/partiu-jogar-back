import { forwardRef, Module } from '@nestjs/common';
import { CourtController } from './court.controller';
import { CourtService } from './court.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Court } from './entities/court.entity';
import { SchoolModule } from '../school/school.module';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Court]),
    forwardRef(() => SchoolModule),
    ImageModule,
  ],
  controllers: [CourtController],
  providers: [CourtService],
  exports: [CourtService]
})
export class CourtModule {}
