import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupervisorDto } from './dto/CreateSupervisorDto';
import { Supervisor } from './entities/supervisor.entity';
import { UpdateSupervisorDto } from './dto/UpdateSupervisorDto';

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
      return await this.findBy({ id });
    }

    async findBy(options: Partial<{
      id: string,
      cpf: string,
      name: string,
      email: string
    }>): Promise<Supervisor> {
      return await this.repo.findOneBy({
        id: options.id,
        cpf: options.cpf,
        firstname: options.name,
        email: options.email,
      });
    }
    
  async update(id: string, UpdateSupervisorDto: UpdateSupervisorDto): Promise<Supervisor> {
      await this.repo.update(id, UpdateSupervisorDto);
      return await this.findBy({ id });
    }

    async remove(id: string): Promise<Supervisor> {
      const removed = await this.findOne(id);
      await this.repo.delete(id);
      return removed;
    }
}
