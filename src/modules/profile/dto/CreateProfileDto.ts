import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProfileDto {
    @ApiProperty()
    firstname: string;
    @ApiPropertyOptional()
    lastname: string;
    @ApiProperty()
    cpf: string;
}
