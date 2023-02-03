import { IntersectionType, PartialType, PickType } from "@nestjs/swagger";
import { SupervisorDto } from "./SupervisorDto";

export class CreateSupervisorDto extends 
IntersectionType(
    PartialType(
        PickType(
            SupervisorDto,
            ["firstname", "lastname"]
        )
    ),
    PickType(
        SupervisorDto,
        ["cpf", "email", "password", "school"]
    )
) {}
