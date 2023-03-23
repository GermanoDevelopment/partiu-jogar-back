import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourtService } from './court.service';

import { CourtDto } from './dto/CourtDto';
import { CreateCourtDto } from './dto/CreateCourtDto';
import { UpdateCourtDto } from './dto/UpdateCourtDto';

@ApiTags('Court')
@Controller('court')
export class CourtController {
  constructor(private readonly courtService: CourtService) {}

  @Post('create-court')
  async create(@Body() createCourtDto: CreateCourtDto): Promise<CourtDto> {
    return await this.courtService.create(createCourtDto);
  }

  @Get('get-all-courts')
  async findAll(): Promise<CourtDto[]> {
    return await this.courtService.findAll();
  }

  @Get('get-court/:id')
  async findOne(@Param('id') id: string): Promise<CourtDto> {
    return await this.courtService.findOne(id);
  }

  @Patch('update-court/:id')
  async update(@Param('id') id: string, @Body() updateCourtDto: UpdateCourtDto): Promise<CourtDto> {
    return await this.courtService.update(id, updateCourtDto);
  }

  @Delete('delete-court/:id')
  async remove(@Param('id') id: string): Promise<CourtDto> {
    return await this.courtService.remove(id);
  }
}
