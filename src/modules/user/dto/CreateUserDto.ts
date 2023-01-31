import { ApiProperty, ApiPropertyOptional, PickType } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiPropertyOptional()
    name: string;
    
    @ApiProperty()
    cpf: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
