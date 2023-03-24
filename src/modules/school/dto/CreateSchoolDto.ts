<<<<<<< HEAD
import { PickType, IntersectionType, PartialType } from '@nestjs/swagger';
import { SchoolDto } from './SchoolDto';

export class CreateSchoolDto extends IntersectionType(
    PickType(
        SchoolDto, ["name"]
    ),
    PartialType(
        PickType(SchoolDto, ["location", "address", "court", "supervisors"])
    )
) {}
=======
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSchoolDto {
    @ApiPropertyOptional()
    name: string;
    @ApiPropertyOptional()
    location: string;
    @ApiPropertyOptional()
    address: string;
}
>>>>>>> 3bb1daf5db0a6041398dbef9436c468c06592af3
