import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/CreateScheduleDto';
import { UpdateScheduleDto } from './dto/UpdateScheduleDto';
import { ApiTags } from '@nestjs/swagger';
import { Schedule } from './entities/schedule.entity';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('create-schedule')
  async create(@Body() scheduleCourtDto: CreateScheduleDto): Promise<Schedule> {
    return await this.scheduleService.create(CreateScheduleDto);
  }

  @Get('get-all-schedules')
  async findAll(): Promise<Schedule[]> {
    return await this.scheduleService.findAll();
  }

  @Get('get-schedule/:id')
  async findOne(@Param('id') id: string): Promise<Schedule> {
    return await this.scheduleService.findOne(id);
  }

  @Patch('update-schedule/:id')
  async update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto): Promise<Schedule> {
    return await this.scheduleService.update(id, updateScheduleDto);
  }

  @Delete('delete-schedule/:id')
  async remove(@Param('id') id: string): Promise<Schedule> {
    return await this.scheduleService.remove(id);
  }
}
