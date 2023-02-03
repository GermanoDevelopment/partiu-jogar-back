import { ApiPropertyOptional } from '@nestjs/swagger';
import { Supervisor } from 'src/modules/supervisor/entities/supervisor.entity';
import { User } from 'src/modules/user/entities/user.entity';

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
  applicant: User;

  @ApiPropertyOptional()
  supervisor: Supervisor;
}