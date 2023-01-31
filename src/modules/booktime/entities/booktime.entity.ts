import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { User } from '../../../modules/user/entities/user.entity';
import { Schedule } from '../../../modules/schedule/entities/schedule.entity';
import { Supervisor } from '../../../modules/supervisor/entities/supervisor.entity';
import { Court } from '../../../modules/court/entities/court.entity';

@Entity()
export class Booktime extends AbstractEntity {
    @Column({ nullable: false, type: 'timestamp without time zone' })
    startDate: Date;
    @Column({ nullable: false, type: 'timestamp without time zone' })
    endDate: Date;
    @Column({ nullable: false, default: false })
    reserved: boolean;
    @Column({ nullable: false, default: false })
    approved: boolean;
    
    // relations
    @ManyToOne(() => User, (user) => user.booktimes)
    applicant: User;
    
    @ManyToOne(() => Supervisor, (supervisor) => supervisor.booktimes)
    supervisor: Supervisor;
    
    @OneToOne(() => Court, (court) => court)
    court: Court;

    @ManyToOne(() => Schedule, (schedule) => schedule.booktimes)
    schedule: Schedule;

}
