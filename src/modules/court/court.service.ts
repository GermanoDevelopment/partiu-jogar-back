import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolService } from '../school/school.service';

import { Court } from './entities/court.entity';
import { CourtDto } from './dto/CourtDto';
import { FindCourtDto } from './dto/FindCourtDto';
import { CreateCourtDto } from './dto/CreateCourtDto';
import { UpdateCourtDto } from './dto/UpdateCourtDto';

@Injectable()
export class CourtService {
  constructor(
    @InjectRepository(Court)
    private readonly repo: Repository<Court>,
    @Inject(forwardRef(() => SchoolService))
    readonly schoolService: SchoolService,
  ) {}

  async findManyBy(options: Partial<FindCourtDto>): Promise<Court[]> {
    return await this.repo.findBy({
      id: options.id,
    });
  }

  async findOneBy(options: Partial<FindCourtDto>): Promise<Court> {
    const courts = await this.findManyBy(options) as Court[];
    return courts[0];
  }

  async create(createCourtDto: CreateCourtDto): Promise<CourtDto> {
    let court = this.repo.create();
    const school = await this.schoolService.findOneBy({ id: createCourtDto.schoolId });

    court = { ...court, ...createCourtDto, school };
    
    court = await this.repo.save(court);
    console.log(court);

    return new CourtDto(court);
  }

  async findAll(): Promise<CourtDto[]> {
    const courts = await this.repo.find();
    return courts.map((court) => new CourtDto(court));
  }

  async findOne(id: string): Promise<CourtDto> {
    const court = await this.findOneBy({ id });
    return new CourtDto(court);
  }

  async update(id: string, updateCourtDto: UpdateCourtDto): Promise<CourtDto> {
    let court = await this.findOneBy({ id });
    const school = await this.schoolService.findOneBy({ id: updateCourtDto.schoolId });
    
    court = { ...court, ...updateCourtDto, school };
    await this.repo.update(id, court);
    // console.log(court);
    
    return await this.findOne(id);
  }

  async remove(id: string): Promise<CourtDto> {
    const court = await this.findOneBy({ id });
    await this.repo.remove(court);
    return new CourtDto(court);
  }
}