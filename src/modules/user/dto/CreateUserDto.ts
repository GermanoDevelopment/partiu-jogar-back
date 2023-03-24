import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    // user info
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    
    // profile info
    @ApiPropertyOptional()
    firstname: string;
    @ApiPropertyOptional()
    lastname: string;
    @ApiPropertyOptional()
    cpf: string;
}
