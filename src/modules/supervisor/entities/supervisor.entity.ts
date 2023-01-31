import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { User } from '../../../modules/user/entities/user.entity';
import { School } from '../../../modules/school/entities/school.entity';
import { Booktime } from 'src/modules/booktime/entities/booktime.entity';

@Entity()
export class Supervisor extends User {
    // relations
    @OneToOne(() => School, (school) => school.supervisor)
    school: School;

    @OneToMany(() => Booktime, (booktime) => booktime.supervisor)
    booktimes: Booktime[];
}
