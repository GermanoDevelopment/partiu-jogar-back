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
