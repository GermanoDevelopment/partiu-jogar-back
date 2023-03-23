import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';

import { SchoolModule } from './modules/school/school.module';
import { AuthModule } from './modules/auth/auth.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { BooktimeModule } from './modules/booktime/booktime.module';
import { CourtModule } from './modules/court/court.module';
import { SupervisorModule } from './modules/supervisor/supervisor.module';
import { ImageModule } from './modules/image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      inject: [ApiConfigService],
      useFactory: (config: ApiConfigService) => {
        return config.typeOrmConfig;
      },
    }),
    SharedModule,
    AuthModule,
    UserModule,
    SchoolModule,
    ScheduleModule,
    BooktimeModule,
    CourtModule,
    SupervisorModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}