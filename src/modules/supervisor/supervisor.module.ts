import { forwardRef, Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supervisor } from './entities/supervisor.entity';
import { ProfileModule } from '../profile/profile.module';
import { SchoolModule } from '../school/school.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Supervisor]),
    forwardRef(() => ProfileModule),
    SchoolModule,
  ],
  controllers: [SupervisorController],
  providers: [SupervisorService],
  exports: [SupervisorService]
})
export class SupervisorModule {}
