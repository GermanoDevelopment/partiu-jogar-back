import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { Court } from '../entities/court.entity';

export class CourtDto extends AbstractDto {

  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  address: string;
  @ApiPropertyOptional()
  location: string;
  @ApiProperty()
  schoolId: string;
  @ApiPropertyOptional()
  images: string[];

  constructor(entity: Court) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
    this.location = entity.location;
    this.schoolId = entity.school.id;
    this.images = entity.images.map((img) => img.id);
  }
}
