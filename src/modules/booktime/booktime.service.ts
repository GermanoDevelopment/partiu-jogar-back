import { Injectable } from '@nestjs/common';
import { CreateBooktimeDto } from './dto/create-booktime.dto';
import { UpdateBooktimeDto } from './dto/update-booktime.dto';

@Injectable()
export class BooktimeService {
  create(createBooktimeDto: CreateBooktimeDto) {
    return 'This action adds a new booktime';
  }

  findAll() {
    return `This action returns all booktime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booktime`;
  }

  update(id: number, updateBooktimeDto: UpdateBooktimeDto) {
    return `This action updates a #${id} booktime`;
  }

  remove(id: number) {
    return `This action removes a #${id} booktime`;
  }
}
