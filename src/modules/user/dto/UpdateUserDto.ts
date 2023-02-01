import { CreateUserDto } from './CreateUserDto';
import { ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto    ) {}
