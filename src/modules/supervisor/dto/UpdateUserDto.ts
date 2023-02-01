import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateSupervisorDto {
    @ApiPropertyOptional()
    name: string;
    
    @ApiPropertyOptional()
    email: string;
    
    @ApiPropertyOptional()
    cpf: string;
    
    @ApiPropertyOptional()
    password: string;
}
