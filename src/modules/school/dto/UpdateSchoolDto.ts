import { PartialType } from '@nestjs/swagger';
import { CreateSchoolDto } from './CreateSchoolDto';

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {}
