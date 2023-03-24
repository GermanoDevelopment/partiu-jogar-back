import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooktimeService } from './booktime.service';

import { BooktimeDto } from './dto/BooktimeDto';
import { CreateBooktimeDto } from './dto/CreateBooktimeDto';
import { UpdateBooktimeDto } from './dto/UpdateBooktimeDto';

@ApiTags('Booktime')
@Controller('booktime')
export class BooktimeController {
  constructor(private readonly booktimeService: BooktimeService) {}

  @Post('create-booktime')
  async create(@Body() createBooktimeDto: CreateBooktimeDto): Promise<BooktimeDto> {
    return await this.booktimeService.create(createBooktimeDto);
  }

  @Get('get-all-booktimes')
  async findAll(): Promise<BooktimeDto[]> {
    return await this.booktimeService.findAll();
  }

  @Get('get-booktime/:id')
  async findOne(@Param('id') id: string): Promise<BooktimeDto> {
    return await this.booktimeService.findOne(id);
  }

  @Patch('update-booktime/:id')
  async update(@Param('id') id: string, @Body() updateBooktimeDto: UpdateBooktimeDto): Promise<BooktimeDto> {
    return await this.booktimeService.update(id, updateBooktimeDto);
  }

  @Delete('delete-booktime/:id')
  async remove(@Param('id') id: string): Promise<BooktimeDto> {
    return await this.booktimeService.remove(id);
  }
}