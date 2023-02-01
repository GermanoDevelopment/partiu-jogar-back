import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';
import { ApiTags } from '@nestjs/swagger';
import { School } from './entities/school.entity';

@ApiTags('School')
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post('create-school')
  async create(@Body() createSchoolDto: CreateSchoolDto): Promise<School> {
    return await this.schoolService.create(createSchoolDto);
  }

  @Get('get-all-schools')
  async findAll(): Promise<School[]> {
    return await this.schoolService.findAll();
  }

  @Get('get-school/:id')
  async findOne(@Param('id') id: string): Promise<School> {
    return await this.schoolService.findOne(id);
  }

  @Patch('update-school/:id')
  async update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto): Promise<School> {
    return await this.schoolService.update(id, updateSchoolDto);
  }

  @Delete('delete-school/:id')
  async remove(@Param('id') id: string): Promise<School> {
    return await this.schoolService.remove(id);
  }
}
