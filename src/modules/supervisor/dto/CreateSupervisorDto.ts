import { IntersectionType, PartialType, PickType } from "@nestjs/swagger";
import { SupervisorDto } from "./SupervisorDto";

export class CreateSupervisorDto extends 
IntersectionType(
    PartialType(
        PickType(
            SupervisorDto,
            ["firstname", "lastname", "school"]
        )
    ),
    PickType(
        SupervisorDto,
        ["cpf", "email", "password"]
    )
) {}
