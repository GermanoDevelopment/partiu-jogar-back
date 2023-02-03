import { ApiPropertyOptional } from "@nestjs/swagger";
import { Schedule } from "src/modules/schedule/entities/schedule.entity";
import { School } from "src/modules/school/entities/school.entity";

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
  schedule: Schedule;

  @ApiPropertyOptional()
  school: School;
}