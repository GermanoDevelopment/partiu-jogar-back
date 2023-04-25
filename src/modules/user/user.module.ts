import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonUser } from './entities/common-user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommonUser]), 
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
