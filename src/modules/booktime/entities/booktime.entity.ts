import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { User } from '../../../modules/user/entities/user.entity';
import { Supervisor } from '../../../modules/supervisor/entities/supervisor.entity';
import { Court } from '../../../modules/court/entities/court.entity';
import { Schedule } from '../../../modules/schedule/entities/schedule.entity';

@Entity()
export class Booktime extends AbstractEntity {
    @Column({ nullable: false, type: 'timestamp without time zone' })
    startDate: Date;
    @Column({ nullable: false, type: 'timestamp without time zone' })
    endDate: Date;
    // TODO: check if time to book some local could be an enum, eg:
    // EBookTime { halfhour, onehour, twohours, quartofhour }
    @Column({ nullable: false, default: false })
    reserved: boolean;
    // TODO: should change this to be nullable true and default null?
    // approved can be true or false only set by a supervisor
    @Column({ nullable: false, default: false })
    approved: boolean;
    
    // relations
    @ManyToOne(() => User, (user) => user.booktimes)
    applicant: User;
    
    @ManyToOne(() => Supervisor, (supervisor) => supervisor.booktimes)
    supervisor: Supervisor;
    
    // TODO: remove this reference, since it can be picked from schedule.court
    @OneToOne(() => Court, (court) => court)
    court: Court;

    @ManyToOne(() => Schedule, (schedule) => schedule.booktimes)
    schedule: Schedule;

}
