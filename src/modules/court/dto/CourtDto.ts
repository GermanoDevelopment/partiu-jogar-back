import { OmitType } from '@nestjs/swagger';
import { Court } from '../entities/court.entity';

export class CourtDto extends OmitType(
  Court,
  ["createdAt", "updatedAt"]
) {}
