import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { School } from '../../../modules/school/entities/school.entity';
import { User } from '../../../modules/user/entities/user.entity';
import { Booktime } from '../../../modules/booktime/entities/booktime.entity';

@Entity()
export class Supervisor extends User {
    // relations
    @ManyToOne(() => School, (school) => school.supervisors)
    school: School;

    @OneToMany(() => Booktime, (booktime) => booktime.supervisor)
    booktimes: Booktime[];
}
