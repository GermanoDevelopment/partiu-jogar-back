import { AbstractEntity } from '../../../common/abstract.entity';
import { Entity, OneToMany, OneToOne } from 'typeorm';
import { Court } from '../../../modules/court/entities/court.entity';
import { Booktime } from '../../../modules/booktime/entities/booktime.entity';

@Entity()
export class Schedule extends AbstractEntity {
    // relations
    @OneToOne(() => Court, (court) => court.schedule)
    court: Court;
    @OneToMany(() => Booktime, (booktime) => booktime.schedule)
    booktimes: Booktime[];
}
