import { OmitType } from "@nestjs/swagger";
import { School } from "../entities/school.entity";

export class SchoolDto extends OmitType(
  School,
  ["createdAt", "updatedAt"]
) {}
