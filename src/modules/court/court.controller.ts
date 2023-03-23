import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CourtService } from './court.service';
import { LoggedUser } from '../../decorators/logged-user.decorator';

import { CourtDto } from './dto/CourtDto';
import { CreateCourtDto } from './dto/CreateCourtDto';
import { UpdateCourtDto } from './dto/UpdateCourtDto';
import { UserDto } from '../user/dto/UserDto';

@ApiTags('Court')
@Controller('court')
export class CourtController {
  constructor(private readonly courtService: CourtService) {}

  @Post('create-court')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'main', maxCount: 1 },
    { name: 'photos', maxCount: 4 },
  ]))
  async create(
    @LoggedUser() user: UserDto,
    @Body() createCourtDto: CreateCourtDto,
    @UploadedFile() files: { main?: Express.Multer.File, photos?: Array<Express.Multer.File> },
  ): Promise<CourtDto> {
    return await this.courtService.create(user, createCourtDto, files);
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
