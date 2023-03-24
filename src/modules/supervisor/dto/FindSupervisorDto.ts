import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindSupervisorDto {
  @ApiPropertyOptional()
  id: string;
  
  @ApiPropertyOptional()
  name: string;
  
  @ApiPropertyOptional()
  cpf: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  schoolId: string;

  @ApiPropertyOptional()
  booktimeId: string;
}
