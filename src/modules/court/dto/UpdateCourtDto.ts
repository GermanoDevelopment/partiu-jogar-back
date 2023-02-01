import { PartialType } from '@nestjs/swagger';
import { CreateCourtDto } from './CreateCourtDto';

export class UpdateCourtDto extends PartialType(CreateCourtDto) {}
