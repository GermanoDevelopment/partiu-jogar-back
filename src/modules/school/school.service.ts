import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly repo: Repository<School>,
  ) {}

  async create(createSchoolDto: CreateSchoolDto): Promise<School> {
    return await this.repo.save(createSchoolDto);
  }

  async findAll(): Promise<School[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<School> {
    return await this.findBy({ id });
  }

  async findBy(options: Partial<{
    id: string,
    name: string,
    address: string,
    location: string
  }>): Promise<School> {
    return await this.repo.findOneBy({
      id: options.id,
      name: options.name,
      address: options.address,
      location: options.location
    });
  }

  async update(id: string, UpdateSchoolDto: UpdateSchoolDto): Promise<School> {
    await this.repo.update(id, UpdateSchoolDto);
    return await this.findBy({ id });
  }

  async remove(id: string): Promise<School> {
    const removed = await this.findOne(id);
    await this.repo.delete(id);
    return removed;
  }
}
