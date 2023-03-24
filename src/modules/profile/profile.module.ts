import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupervisorModule } from '../supervisor/supervisor.module';
import { UserModule } from '../user/user.module';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    forwardRef(() => UserModule),
    SupervisorModule,
  ],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
