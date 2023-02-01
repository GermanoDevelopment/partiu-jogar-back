import { ApiPropertyOptional } from "@nestjs/swagger";

export class FindSchoolDto {
  @ApiPropertyOptional()
  id: string;
  
  @ApiPropertyOptional()
  name: string;
  
  @ApiPropertyOptional()
  address: string;

  @ApiPropertyOptional()
  location: string;
}