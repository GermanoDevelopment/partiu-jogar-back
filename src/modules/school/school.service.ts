import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageService } from '../image/image.service';

import { School } from './entities/school.entity';
import { SchoolDto } from './dto/SchoolDto';
import { FindSchoolDto } from './dto/FindSchoolDto';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';

import { CreateImageDto } from '../image/dto/CreateImageDto';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly repo: Repository<School>,
    readonly imageService: ImageService,
  ) {}


  async findManyBy(options: Partial<FindSchoolDto>): Promise<School[]> {
    return await this.repo.findBy({
      id: options.id,
      name: options.name,
      address: options.address,
      location: options.location
    });
  }

  async findOneBy(options: Partial<FindSchoolDto>): Promise<School> {
    const schools = await this.findManyBy(options) as School[];
    return schools[0];
  }

  async create(
    createSchoolDto: CreateSchoolDto,
    files: { main?: Express.Multer.File, photos?: Array<Express.Multer.File> },
  ): Promise<SchoolDto> {
    let school = this.repo.create();
    
    if (files.main) {
      const mainImg = await this.imageService.create(
        { schoolId: school.id } as CreateImageDto,
        files.main,
      );
      const main = await this.imageService.findOneBy({ id: mainImg.id });
      school = { ...school, main };
    }
    if (files.photos && files.photos.length <= 4) {
      let photoImgs = files.photos.map((photoImg) => {
        return this.imageService.create(
          { schoolId: school.id } as CreateImageDto,
          photoImg,
        );
      });
      const photos = await Promise.all(photoImgs);
      const imgs = photos.map((img) => {
        return this.imageService.findOneBy({ id: img.id });
      });
      const images = await Promise.all(imgs);

      school = { ...school, images };
    }
    
    school = { ...school, ...createSchoolDto };
    
    school = await this.repo.save(school);
    // console.log(school);

    return new SchoolDto(school);
  }

  async findAll(): Promise<SchoolDto[]> {
    const schools = await this.repo.find();
    return schools.map((school) => new SchoolDto(school));
  }

  async findOne(id: string): Promise<SchoolDto> {
    const school = await this.findOneBy({ id });
    return new SchoolDto(school);
  }

  async update(id: string, UpdateSchoolDto: UpdateSchoolDto): Promise<SchoolDto> {
    let school = await this.findOneBy({ id });
    school = { ...school, ...UpdateSchoolDto}
    await this.repo.update(id, school);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<SchoolDto> {
    const school = await this.findOneBy({ id });
    await this.repo.remove(school);
    return new SchoolDto(school);
  }
}
