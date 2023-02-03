import { PickType } from '@nestjs/swagger';
import { BooktimeDto } from './BooktimeDto';

export class CreateBooktimeDto extends PickType(
  BooktimeDto,
  ['startDate', 'endDate', 'schedule']
) {}
