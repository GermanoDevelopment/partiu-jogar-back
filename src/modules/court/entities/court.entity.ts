import { Schedule } from '../../../modules/schedule/entities/schedule.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { School } from '../../../modules/school/entities/school.entity';
import { Booktime } from 'src/modules/booktime/entities/booktime.entity';

@Entity()
export class Court extends AbstractEntity {
    @Column({ nullable: false })
    name: string;
    @Column({ nullable: true })
    address: string;
    @Column({ nullable: true })
    location: string;

    // relations
    @OneToOne(() => Schedule, (schedule) => schedule.court)
    schedule: Schedule;
    @ManyToOne(() => School, (school) => school.court)
    school: School;
}
