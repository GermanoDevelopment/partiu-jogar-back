import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindUserDto {
    @ApiPropertyOptional()
    id: string;
    @ApiPropertyOptional()
    cpf: string;
    @ApiPropertyOptional()
    name: string;
    @ApiPropertyOptional()
    email: string;
}
