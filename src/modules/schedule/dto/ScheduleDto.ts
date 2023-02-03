import { OmitType } from '@nestjs/swagger';
import { Schedule } from '../entities/schedule.entity';

export class ScheduleDto extends OmitType(
  Schedule,
  ["createdAt", "updatedAt"]
) {}
