import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CourtService } from '../court/court.service';
import { SupervisorService } from '../supervisor/supervisor.service';

import { Booktime } from './entities/booktime.entity';
import { BooktimeDto } from './dto/BooktimeDto';
import { FindBooktimeDto } from './dto/FindBooktimeDto';
import { CreateBooktimeDto } from './dto/CreateBooktimeDto';
import { UpdateBooktimeDto } from './dto/UpdateBooktimeDto';

@Injectable()
export class BooktimeService {
  constructor(
    @InjectRepository(Booktime)
    private readonly repo: Repository<Booktime>,
    readonly userService: UserService,
    readonly courtService: CourtService,
    readonly supervisorService: SupervisorService,
  ) {}

  async findManyBy(options: Partial<FindBooktimeDto>): Promise<Booktime[]> {
    const applicant = await this.userService.findOneBy({ id: options.applicantId });
    const supervisor = await this.supervisorService.findOneBy({ id: options.supervisorId });
    return await this.repo.findBy({
      id: options.id,
      startDate: options.startDate,
      endDate: options.endDate,
      reserved: options.reserved,
      approved: options.approved,
      applicant,
      supervisor,
    });
  }

  async findOneBy(options: Partial<FindBooktimeDto>): Promise<Booktime> {
    const booktimes = await this.findManyBy(options) as Booktime[];
    return booktimes[0];
  }

  async create(createBooktimeDto: CreateBooktimeDto): Promise<BooktimeDto> {
    let booktime = this.repo.create();
    const court = await this.courtService.findOneBy({ id: createBooktimeDto.courtId });

    booktime = { ...booktime, ...createBooktimeDto };

    booktime = await this.repo.save(createBooktimeDto);
    // console.log(booktime);
    
    return new BooktimeDto(booktime);
  }

  async findAll(): Promise<BooktimeDto[]> {
    const booktimes = await this.repo.find();
    return booktimes.map((booktime) => new BooktimeDto(booktime));
  }

  async findOne(id: string): Promise<BooktimeDto> {
    const booktime = await this.findOneBy({ id });
    return 
  }

  async update(id: string, updateBooktimeDto: UpdateBooktimeDto): Promise<BooktimeDto> {
    let booktime = await this.findOneBy({ id });
    booktime = { ...booktime, ...updateBooktimeDto };

    await this.repo.update(id, updateBooktimeDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<BooktimeDto> {
    const removed = await this.findOne(id);
    await this.repo.delete(id);
    return removed;
  }
}