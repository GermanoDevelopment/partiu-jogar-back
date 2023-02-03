import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { Court } from '../entities/court.entity';

export class CreateCourtDto extends
  IntersectionType(
    PickType(
      Court, ['name', 'school']
    ),
    PartialType(
      PickType(Court, ['address', 'location'])
    )
  ) {}
