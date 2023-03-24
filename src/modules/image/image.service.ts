import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadService } from '../upload/upload.service';
import { CreateImageDto } from './dto/CreateImageDto';
import { FindImageDto } from './dto/FindImageDto';
import { ImageDto } from './dto/ImageDto';
import { UpdateImageDto } from './dto/UpdateImageDto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  
  constructor(
    @InjectRepository(Image)
    readonly repo: Repository<Image>,
    readonly uploadService: UploadService,
  ) {}

  // TODO: search images from school and court
  async findManyBy(options: Partial<FindImageDto>): Promise<Image[]> {
    return await this.repo.findBy({
      id: options.id,
      path: options.path,
    });
  }

  async findOneBy(options: Partial<FindImageDto>): Promise<Image> {
    const images = await this.findManyBy(options) as Image[];
    return images[0];
  }

  async create(
    createImageDto: CreateImageDto,
    file: Express.Multer.File
  ): Promise<ImageDto> {
    let image = this.repo.create();
    const path = await this.uploadService.uploadFile(file);
    image = { ...image, path };

    // image = await this.repo.save(image);
    console.log(image);
    
    return new ImageDto(image);
  }

  async findAll(): Promise<ImageDto[]> {
    const images = await this.repo.find();
    return images.map((image) => new ImageDto(image));
  }

  async findOne(id: string): Promise<ImageDto> {
    const image = await this.findOneBy({ id });
    return new ImageDto(image);
  }

  async update(id: string, updateImageDto: UpdateImageDto): Promise<ImageDto> {
    let image = await this.findOneBy({ id });
    return null;
  }

  async remove(id: string): Promise<ImageDto> {
    const image = await this.findOneBy({ id });
    await this.repo.remove(image);
    return new ImageDto(image);
  }
}
