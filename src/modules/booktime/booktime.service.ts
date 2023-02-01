import { Injectable } from '@nestjs/common';
import { CreateBooktimeDto } from './dto/CreateBooktimeDto';
import { UpdateBooktimeDto } from './dto/UpdateBooktimeDto';

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
