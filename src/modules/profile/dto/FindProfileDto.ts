import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindProfileDto {
    @ApiPropertyOptional()
    id: string;
    @ApiPropertyOptional()
    firstname: string;
    @ApiPropertyOptional()
    lastname: string;
    @ApiPropertyOptional()
    cpf: string;
    @ApiPropertyOptional()
    userId: string;
}
