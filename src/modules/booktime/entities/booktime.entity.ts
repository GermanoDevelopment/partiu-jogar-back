import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { Court } from '../../court/entities/court.entity';
import { Supervisor } from '../../supervisor/entities/supervisor.entity';
import { CommonUser } from '../../user/entities/common-user.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';

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
    @ManyToOne(() => CommonUser, (user) => user.booktimes)
    applicant: CommonUser;
    
    @ManyToOne(() => Supervisor, (supervisor) => supervisor.booktimes)
    supervisor: Supervisor;
    
    @OneToOne(() => Court, (court) => court)
    court: Court;

    @ManyToOne(() => Schedule, (schedule) => schedule.booktimes)
    schedule: Schedule;
}
