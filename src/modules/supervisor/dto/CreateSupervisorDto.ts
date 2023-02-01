import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateSupervisorDto {
    @ApiPropertyOptional()
    name: string;
    
    @ApiProperty()
    cpf: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
