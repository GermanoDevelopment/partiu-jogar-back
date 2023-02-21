import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { Court } from '../entities/court.entity';
import { CourtDto } from './CourtDto';

export class CreateCourtDto extends
  IntersectionType(
    PickType(
      CourtDto, ['name', 'school']
    ),
    PartialType(
      PickType(Court, ['address', 'location'])
    )
  ) {}
