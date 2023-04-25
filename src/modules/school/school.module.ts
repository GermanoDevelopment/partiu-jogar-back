import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School } from './entities/school.entity';
import { ImageModule } from '../image/image.module';
import { SupervisorModule } from '../supervisor/supervisor.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([School]),
    ImageModule,
    UserModule,
    SupervisorModule,
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [SchoolService],
})
export class SchoolModule {}
