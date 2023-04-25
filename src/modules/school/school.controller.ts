import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { SchoolService } from './school.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { LoggedUser } from '../../decorators/logged-user.decorator';
import { Roles } from '../../decorators/roles.decorator';
import { ERole } from '../../constants/role.enum';

import { SchoolDto } from './dto/SchoolDto';
import { CreateSchoolDto } from './dto/CreateSchoolDto';
import { UpdateSchoolDto } from './dto/UpdateSchoolDto';
import { UserDto } from '../user/dto/UserDto';

@ApiTags('School')
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post('create-school')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'main', maxCount: 1 },
    { name: 'photos', maxCount: 4 },
  ]))
  @Roles(
    ERole.SUPERADMIN,
    ERole.SUPERVISORADMIN,
  )
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
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
  @Roles(
    ERole.SUPERADMIN,
    ERole.SUPERVISORADMIN,
  )
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async update(
    @LoggedUser() user: UserDto,
    @Param('id') id: string,
    @Body() updateSchoolDto: UpdateSchoolDto,
    @UploadedFile() files: { main?: Express.Multer.File, photos?: Array<Express.Multer.File> },
  ): Promise<SchoolDto> {
    return await this.schoolService.update(user, id, updateSchoolDto);
  }

  @Delete('delete-school/:id')
  @Roles(
    ERole.SUPERADMIN,
    ERole.SUPERVISORADMIN,
  )
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async remove(
    @LoggedUser() user: UserDto,
    @Param('id') id: string
  ): Promise<SchoolDto> {
    return await this.schoolService.remove(user, id);
  }
}
