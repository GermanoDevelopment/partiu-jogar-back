import { PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from './CreateProfileDto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
