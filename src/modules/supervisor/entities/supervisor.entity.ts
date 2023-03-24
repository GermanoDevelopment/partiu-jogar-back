import { ChildEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ERole } from '../../../constants/role.enum';
import { User } from '../../user/entities/user.entity';
import { School } from '../../school/entities/school.entity';
import { Booktime } from '../../booktime/entities/booktime.entity';

@ChildEntity()
export class Supervisor extends User {
    @Column({ nullable: false, default: ERole.SUPERVISOR, enum: ERole, type: 'enum' })
    role: ERole;

    // relations
    @ManyToOne(() => School, (school) => school.supervisors)
    school: School;
    
    @OneToMany(() => Booktime, (booktime) => booktime.supervisor)
    booktimes: Booktime[];
}
