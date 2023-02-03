import { OmitType } from '@nestjs/swagger';
import { Booktime } from '../entities/booktime.entity';

export class BooktimeDto extends OmitType(
  Booktime,
  ["createdAt", "updatedAt"]
) {}
