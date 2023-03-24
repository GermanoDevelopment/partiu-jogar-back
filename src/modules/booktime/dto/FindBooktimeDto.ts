import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindBooktimeDto {
  @ApiPropertyOptional()
  id: string;
  
  @ApiPropertyOptional()
  startDate: Date;
  
  @ApiPropertyOptional()
  endDate: Date;
  
  @ApiPropertyOptional()
  reserved: boolean;
  
  @ApiPropertyOptional()
  approved: boolean;
  
  @ApiPropertyOptional()
  applicantId: string;
  
  @ApiPropertyOptional()
  supervisorId: string;
}
