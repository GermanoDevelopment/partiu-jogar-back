import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBooktimeDto {
    @ApiPropertyOptional()
    startDate: Date;
    
    @ApiPropertyOptional()
    endDate: Date;
}
