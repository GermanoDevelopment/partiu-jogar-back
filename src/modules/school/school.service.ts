import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { Repository } from 'typeorm';
import { FindSchoolDto } from './dto/FindSchoolDto';
import { SchoolDto } from './dto/SchoolDto';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly repo: Repository<School>,
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

  async create(createSchoolDto: CreateSchoolDto): Promise<SchoolDto> {
    const school = await this.repo.save(createSchoolDto);
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
