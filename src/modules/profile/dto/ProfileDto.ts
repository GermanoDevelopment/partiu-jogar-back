import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { Profile } from '../entities/profile.entity';

export class ProfileDto extends AbstractDto {
    @ApiProperty()
    firstname: string;
    @ApiPropertyOptional()
    lastname: string;
    @ApiProperty()
    cpf: string;
    @ApiProperty()
    userId: string;

    constructor(entity: Profile) {
        super(entity);
        this.firstname = entity.firstname;
        this.lastname = entity.lastname;
        this.cpf = entity.cpf;
        this.userId = entity.user.id;
    }
}