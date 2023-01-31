import { PartialType } from '@nestjs/swagger';
import { CreateBooktimeDto } from './create-booktime.dto';

export class UpdateBooktimeDto extends PartialType(CreateBooktimeDto) {}
