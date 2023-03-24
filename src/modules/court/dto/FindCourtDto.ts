import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindCourtDto {
  @ApiPropertyOptional()
  id: string;
  
  @ApiPropertyOptional()
  name: string;
  
  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  location: string;

  @ApiPropertyOptional()
  schoolId: string;
}