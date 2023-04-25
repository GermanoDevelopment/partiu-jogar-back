import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SchoolDto } from './dto/SchoolDto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('School')
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post('create-school')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'main', maxCount: 1 },
    { name: 'photos', maxCount: 4 },
  ]))
  async create(
    @Body() createSchoolDto: CreateSchoolDto,
    @UploadedFile() files: { main?: Express.Multer.File, photos?: Array<Express.Multer.File> },
  ): Promise<SchoolDto> {
    return await this.schoolService.create(createSchoolDto, files);
  }

  @Get('get-all-schools')
  async findAll(): Promise<SchoolDto[]> {
    return await this.schoolService.findAll();
  }

  @Get('get-school/:id')
  async findOne(@Param('id') id: string): Promise<SchoolDto> {
    return await this.schoolService.findOne(id);
  }

  @Patch('update-school/:id')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'main', maxCount: 1 },
    { name: 'photos', maxCount: 4 },
  ]))
  async update(
    @Param('id') id: string,
    @Body() updateSchoolDto: UpdateSchoolDto,
    @UploadedFile() files: { main?: Express.Multer.File, photos?: Array<Express.Multer.File> },
  ): Promise<SchoolDto> {
    return await this.schoolService.update(id, updateSchoolDto);
  }

  @Delete('delete-school/:id')
  async remove(@Param('id') id: string): Promise<SchoolDto> {
    return await this.schoolService.remove(id);
  }
}
