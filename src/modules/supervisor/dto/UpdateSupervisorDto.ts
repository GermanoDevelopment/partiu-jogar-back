import { PartialType } from "@nestjs/swagger";
import { CreateSupervisorDto } from './CreateSupervisorDto';

export class UpdateSupervisorDto extends PartialType(CreateSupervisorDto) {}