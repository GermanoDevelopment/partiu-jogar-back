import { PartialType } from '@nestjs/swagger';
import { CreateBooktimeDto } from './CreateBooktimeDto';

export class UpdateBooktimeDto extends PartialType(CreateBooktimeDto) {}
