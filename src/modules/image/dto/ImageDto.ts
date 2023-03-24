import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { Image } from '../entities/image.entity';

export class ImageDto extends AbstractDto {
    @ApiProperty()
    path: string;

    @ApiPropertyOptional()
    schoolId: string;

    @ApiPropertyOptional()
    courtId: string;

    constructor(entity: Image) {
        super(entity);
        this.path = entity.path;
        this.schoolId = entity.school.id;
        this.courtId = entity.court.id;
    }
}
