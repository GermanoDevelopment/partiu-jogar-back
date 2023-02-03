import { ApiPropertyOptional } from "@nestjs/swagger";
import { Booktime } from 'src/modules/booktime/entities/booktime.entity';
import { Court } from 'src/modules/court/entities/court.entity';

export class FindCourtDto {
  @ApiPropertyOptional()
  id: string;
  
  @ApiPropertyOptional()
  court: Court;

  @ApiPropertyOptional()
  booktime: Booktime;
}