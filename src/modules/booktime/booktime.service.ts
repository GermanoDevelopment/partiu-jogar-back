import { Injectable } from '@nestjs/common';
import { CreateBooktimeDto } from './dto/CreateBooktimeDto';
import { UpdateBooktimeDto } from './dto/UpdateBooktimeDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booktime } from './entities/booktime.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Supervisor } from '../supervisor/entities/supervisor.entity';

@Injectable()
export class BooktimeService {
  constructor(
    @InjectRepository(Booktime)
    private readonly repo: Repository<Booktime>,
  ) {}

  async create(createBooktimeDto: CreateBooktimeDto): Promise<Booktime> {
    return await this.repo.save(createBooktimeDto);
  }

  async findAll(): Promise<Booktime[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<Booktime> {
    return await this.findBy({ id });
  }

  async findBy(options: Partial<{
    id: string,
    startDate: Date,
    endDate: Date,
    reserved: boolean,
    approved: boolean,
    applicant: User,
    supervisor: Supervisor
  }>): Promise<Booktime> {
    return await this.repo.findOneBy({
      id: options.id,
      startDate: options.startDate,
      endDate: options.endDate,
      reserved: options.reserved,
      approved: options.approved,
      applicant: options.applicant,
      supervisor: options.supervisor
    });
  }

  async update(id: string, UpdateBooktimeDto: UpdateBooktimeDto): Promise<Booktime> {
    await this.repo.update(id, UpdateBooktimeDto);
    return await this.findBy({ id });
  }

  async remove(id: string): Promise<Booktime> {
    const removed = await this.findOne(id);
    await this.repo.delete(id);
    return removed;
  }
}