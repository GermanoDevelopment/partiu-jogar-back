import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Booktime } from "src/modules/booktime/entities/booktime.entity";
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