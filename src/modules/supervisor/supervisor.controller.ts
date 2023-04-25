import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SupervisorService } from './supervisor.service';
import { Roles } from '../../decorators/roles.decorator';
import { ERole } from '../../constants/role.enum';
import { RolesGuard } from '../../guards/roles.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

import { SupervisorDto } from './dto/SupervisorDto';
import { CreateSupervisorDto } from './dto/CreateSupervisorDto';
import { UpdateSupervisorDto } from './dto/UpdateSupervisorDto';
import { LoggedUser } from '../../decorators/logged-user.decorator';

@ApiTags('Supervisor')
@Controller('supervisor')
export class SupervisorController {
  constructor(private readonly supervisorService: SupervisorService) {}

  @Post('create-supervisor')
  @Roles(
    ERole.SUPERADMIN,
    ERole.SUPERVISORADMIN,
  )
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  async create(
    @Body() createSupervisorDto: CreateSupervisorDto,
  ): Promise<SupervisorDto> {
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
