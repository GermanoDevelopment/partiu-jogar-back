import { ApiProperty, ApiPropertyOptional, PickType } from "@nestjs/swagger";
import { UserDto } from './UserDto';

export class CreateUserDto extends PickType(
    UserDto,
    ["firstname", "lastname", "cpf", "email", "password"]
) {}
