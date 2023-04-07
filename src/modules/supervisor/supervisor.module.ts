import { forwardRef, Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supervisor } from './entities/supervisor.entity';
import { SchoolModule } from '../school/school.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Supervisor]),
    SchoolModule,
  ],
  controllers: [SupervisorController],
  providers: [SupervisorService],
  exports: [SupervisorService]
})
export class SupervisorModule {}
