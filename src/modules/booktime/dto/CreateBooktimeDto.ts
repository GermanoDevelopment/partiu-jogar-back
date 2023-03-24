import { ApiProperty } from '@nestjs/swagger';

export class CreateBooktimeDto {
  @ApiProperty()
  startDate: Date;
  
  @ApiProperty()
  endDate: Date;
  
  @ApiProperty()
  applicantId: string;
  
  @ApiProperty()
  courtId: string;
}
