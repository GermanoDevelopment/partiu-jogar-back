import { Column, Entity, OneToMany } from 'typeorm';
import { ERole } from '../../../constants/role.enum';
import { Booktime } from '../../../modules/booktime/entities/booktime.entity';
import { Profile } from './profile.entity';

@Entity()
export class User extends Profile {
    @Column({ nullable: false, default: ERole.USER, enum: ERole, type: 'enum' })
    role: ERole;
    
    // relations
    @OneToMany(() => Booktime, (booktime) => booktime.applicant)
    booktimes: Booktime[];
}
