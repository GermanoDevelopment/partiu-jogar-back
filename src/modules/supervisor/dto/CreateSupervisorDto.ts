import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSupervisorDto {
    @ApiProperty()
    firstname: string;
    
    @ApiPropertyOptional()
    lastname: string;
    
    @ApiProperty()
    cpf: string;
    
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    password: string;
    
    @ApiProperty()
    schoolId: string;
}
