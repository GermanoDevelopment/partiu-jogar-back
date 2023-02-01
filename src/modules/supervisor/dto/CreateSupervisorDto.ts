import { PickType } from "@nestjs/swagger";
import { SupervisorDto } from "./SupervisorDto";

export class CreateSupervisorDto extends PickType(
    SupervisorDto,
    ["firstname", "lastname", "cpf", "email", "password"]
) {}
