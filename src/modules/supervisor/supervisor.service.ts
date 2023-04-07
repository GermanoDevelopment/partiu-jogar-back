import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolService } from '../school/school.service';
import { ERole } from '../../constants/role.enum';

import { Supervisor } from './entities/supervisor.entity';
import { SupervisorDto } from './dto/SupervisorDto';
import { FindSupervisorDto } from './dto/FindSupervisorDto';
import { CreateSupervisorDto } from './dto/CreateSupervisorDto';
import { UpdateSupervisorDto } from './dto/UpdateSupervisorDto';

@Injectable()
export class SupervisorService {
  constructor(
    @InjectRepository(Supervisor)
    private readonly repo: Repository<Supervisor>,
    readonly schoolService: SchoolService,
  ) {}

  // TODO: find by schools and approved booktimes
  async findManyBy(options: Partial<FindSupervisorDto>): Promise<Supervisor[]> {
    const school = await this.schoolService.findOneBy({ id: options.schoolId });
    return await this.repo.findBy({
      id: options.id,
      email: options.email,
      school,
    });
  }

  async findOneBy(options: Partial<FindSupervisorDto>): Promise<Supervisor> {
    const supervisors = await this.findManyBy(options) as Supervisor[];
    return supervisors[0];
  }

  async create(createSupervisorDto: CreateSupervisorDto): Promise<SupervisorDto> {
    let supervisor = this.repo.create();

    supervisor = { 
      ...supervisor, 
      ...createSupervisorDto,
      role: ERole.SUPERVISOR,
    };

    supervisor = await this.repo.save(supervisor);
    // console.log(supervisor);
    
    return new SupervisorDto(supervisor);
  }

  async findAll(): Promise<SupervisorDto[]> {
    const supervisors = await this.repo.find();
    return supervisors.map((supervisor) => new SupervisorDto(supervisor));
  }

  async findOne(id: string): Promise<SupervisorDto> {
    const supervisor = await this.findOneBy({ id });
    return new SupervisorDto(supervisor);
  }
    
  async update(id: string, updateSupervisorDto: UpdateSupervisorDto): Promise<SupervisorDto> {
    let supervisor = await this.findOneBy({ id });
    supervisor = { ...supervisor, ...updateSupervisorDto };

    // update school
    if (updateSupervisorDto.schoolId) {
      const school = await this.schoolService.findOneBy({ id: updateSupervisorDto.schoolId });
      supervisor = { ...supervisor, school };
    }
    
    await this.repo.update(id, supervisor);
    // console.log(supervisor);
    
    return await this.findOne(id);
  }

    async remove(id: string): Promise<SupervisorDto> {
      const supervisor = await this.findOneBy({ id });
      await this.repo.remove(supervisor);
      return new SupervisorDto(supervisor);
    }
}
