import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateImageDto {
    @ApiPropertyOptional()
    schoolId: string;

    @ApiPropertyOptional()
    courtId: string;
}
