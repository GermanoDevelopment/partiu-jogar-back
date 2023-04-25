import { forwardRef, Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supervisor } from './entities/supervisor.entity';
import { SchoolModule } from '../school/school.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Supervisor]),
    UserModule,
    forwardRef(() => SchoolModule),
  ],
  controllers: [SupervisorController],
  providers: [SupervisorService],
  exports: [SupervisorService]
})
export class SupervisorModule {}
