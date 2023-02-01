import { OmitType } from '@nestjs/swagger';
import { Supervisor } from '../entities/supervisor.entity';

export class SupervisorDto extends OmitType(
  Supervisor,
  ["createdAt", "updatedAt"]
) {}
