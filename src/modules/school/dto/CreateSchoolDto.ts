import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSchoolDto {
    @ApiPropertyOptional()
    name: string;
    @ApiPropertyOptional()
    location: string;
    @ApiPropertyOptional()
    address: string;
}