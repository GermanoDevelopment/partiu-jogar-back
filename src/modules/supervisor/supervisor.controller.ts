import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SupervisorService } from './supervisor.service';

import { SupervisorDto } from './dto/SupervisorDto';
import { CreateSupervisorDto } from './dto/CreateSupervisorDto';
import { UpdateSupervisorDto } from './dto/UpdateSupervisorDto';

@ApiTags('Supervisor')
@Controller('supervisor')
export class SupervisorController {
  constructor(private readonly supervisorService: SupervisorService) {}

  @Post('create-supervisor')
  async create(@Body() createSupervisorDto: CreateSupervisorDto): Promise<SupervisorDto> {
    return await this.supervisorService.create(createSupervisorDto);
  }

  @Get('get-all-supervisors')
  async findAll(): Promise<SupervisorDto[]> {
    return await this.supervisorService.findAll();
  }

  @Get('get-supervisor/:id')
  async findOne(@Param('id') id: string): Promise<SupervisorDto> {
    return await this.supervisorService.findOne(id);
  }

  @Patch('update-supervisor/:id')
  async update(@Param('id') id: string, @Body() updateSupervisorDto: UpdateSupervisorDto): Promise<SupervisorDto> {
    return await this.supervisorService.update(id, updateSupervisorDto);
  }

  @Delete('delete-supervisor/:id')
  async remove(@Param('id') id: string): Promise<SupervisorDto> {
    return await this.supervisorService.remove(id);
  }
}
