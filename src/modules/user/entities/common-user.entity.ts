import { ChildEntity, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { ERole } from '../../../constants/role.enum';
import { Booktime } from '../../booktime/entities/booktime.entity';

@ChildEntity()
export class CommonUser extends User {
    @Column({ nullable: false, default: ERole.USER, enum: ERole, type: 'enum' })
    role: ERole;
    
    // relations
    @OneToMany(() => Booktime, (booktime) => booktime.applicant)
    booktimes: Booktime[];
}
