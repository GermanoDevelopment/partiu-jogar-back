import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { School } from '../../../modules/school/entities/school.entity';
import { Booktime } from '../../../modules/booktime/entities/booktime.entity';
import { Profile } from '../../../modules/user/entities/profile.entity';
import { ERole } from '../../../constants/role.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Supervisor extends Profile {
    @ApiProperty()
    @Column({ nullable: false, default: ERole.SUPERVISOR, enum: ERole, type: 'enum' })
    role: ERole;

    // relations
    @ApiPropertyOptional()
    @ManyToOne(() => School, (school) => school.supervisors)
    school: School;
    
    @ApiPropertyOptional()
    @OneToMany(() => Booktime, (booktime) => booktime.supervisor)
    booktimes: Booktime[];
}
