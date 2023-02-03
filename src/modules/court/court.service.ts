import { Injectable } from '@nestjs/common';
import { Court } from './entities/court.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourtDto } from './dto/CreateCourtDto';
import { UpdateCourtDto } from './dto/UpdateCourtDto';

@Injectable()
export class CourtService {
  constructor(
    @InjectRepository(Court)
    private readonly repo: Repository<Court>,
  ) {}

  async create(createCourtDto: CreateCourtDto): Promise<Court> {
    return await this.repo.save(createCourtDto);
  }

  async findAll(): Promise<Court[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<Court> {
    return await this.findBy({ id });
  }

  async findBy(options: Partial<{
    id: string,
    name: string,
    address: string,
    location: string
  }>): Promise<Court> {
    return await this.repo.findOneBy({
      id: options.id,
      name: options.name,
      address: options.address,
      location: options.location
    });
  }

  async update(id: string, UpdateCourtDto: UpdateCourtDto): Promise<Court> {
    await this.repo.update(id, UpdateCourtDto);
    return await this.findBy({ id });
  }

  async remove(id: string): Promise<Court> {
    const removed = await this.findOne(id);
    await this.repo.delete(id);
    return removed;
  }
}