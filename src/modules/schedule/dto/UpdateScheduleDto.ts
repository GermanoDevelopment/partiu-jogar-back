import { PartialType } from '@nestjs/swagger';
import { CreateScheduleDto } from './CreateScheduleDto';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}
