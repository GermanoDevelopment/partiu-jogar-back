import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { UploadModule } from '../upload/upload.module';
import { Image } from './entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Image]),
    UploadModule,
  ],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
