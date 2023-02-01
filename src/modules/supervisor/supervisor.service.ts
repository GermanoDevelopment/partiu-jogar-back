import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupervisorDto } from './dto/CreateSupervisorDto';
import { Supervisor } from './entities/supervisor.entity';
import { UpdateSupervisorDto } from './dto/UpdateUserDto';

@Injectable()
export class SupervisorService {
  constructor(
    @InjectRepository(Supervisor)
    private readonly repo: Repository<Supervisor>,
  ) {}

  async create(createSupervisorDto: CreateSupervisorDto): Promise<Supervisor> {
      return await this.repo.save(createSupervisorDto);
    }

  async findAll(): Promise<Supervisor[]> {
      return await this.repo.find();
    }

  async findOne(id: string): Promise<Supervisor> {
      return await this.findOne(id);
    }

  async update(id: string, UpdateSupervisorDto: UpdateSupervisorDto): Promise<Supervisor> {
      await this.repo.update(id, UpdateSupervisorDto);
      return await this.findOne(id);
    }

    async remove(id: string): Promise<Supervisor> {
      const removed = await this.findOne(id);
      await this.repo.delete(id);
      return removed;
    }
}
