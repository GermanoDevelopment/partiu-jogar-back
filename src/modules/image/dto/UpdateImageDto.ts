import { PartialType } from '@nestjs/swagger';
import { CreateImageDto } from './CreateImageDto';

export class UpdateImageDto extends PartialType(CreateImageDto) {}
