import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindImageDto {
    @ApiPropertyOptional()
    id: string;

    @ApiPropertyOptional()
    path: string;
    
    @ApiPropertyOptional()
    schoolId: string;
    
    @ApiPropertyOptional()
    courtId: string;
}
