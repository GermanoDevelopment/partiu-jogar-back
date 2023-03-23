import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCourtDto {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  schoolId: string;
  
  @ApiPropertyOptional()
  address: string;
  
  @ApiPropertyOptional()
  location: string;
}
