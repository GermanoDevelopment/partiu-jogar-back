import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooktimeService } from './booktime.service';
import { CreateBooktimeDto } from './dto/create-booktime.dto';
import { UpdateBooktimeDto } from './dto/update-booktime.dto';

@Controller('booktime')
export class BooktimeController {
  constructor(private readonly booktimeService: BooktimeService) {}

  @Post()
  create(@Body() createBooktimeDto: CreateBooktimeDto) {
    return this.booktimeService.create(createBooktimeDto);
  }

  @Get()
  findAll() {
    return this.booktimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booktimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBooktimeDto: UpdateBooktimeDto) {
    return this.booktimeService.update(+id, updateBooktimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booktimeService.remove(+id);
  }
}
