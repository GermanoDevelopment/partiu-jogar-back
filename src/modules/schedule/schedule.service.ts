import { Injectable } from '@nestjs/common';
import { Schedule } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/CreateScheduleDto';
import { Court } from '../court/entities/court.entity';
import { UpdateScheduleDto } from './dto/UpdateScheduleDto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly repo: Repository<Schedule>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    return await this.repo.save(createScheduleDto);
  }

  async findAll(): Promise<Schedule[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<Schedule> {
    return await this.findBy({ id });
  }

  async findBy(options: Partial<{
    id: string,
    court: Court
  }>): Promise<Schedule> {
    return await this.repo.findOneBy({
      id: options.id,
      court: options.court
    }); 
  }

  async update(id: string, UpdateScheduleDto: UpdateScheduleDto): Promise<Schedule> {
    await this.repo.update(id, UpdateScheduleDto);
    return await this.findBy({ id });
  }

  async remove(id: string): Promise<Schedule> {
    const removed = await this.findOne(id);
    await this.repo.delete(id);
    return removed;
  }
}