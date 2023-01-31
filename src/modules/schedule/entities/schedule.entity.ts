import { AbstractEntity } from '../../../common/abstract.entity';
import { Entity, OneToMany, OneToOne } from 'typeorm';
import { Booktime } from '../../../modules/booktime/entities/booktime.entity';
import { Court } from '../../../modules/court/entities/court.entity';

@Entity()
export class Schedule extends AbstractEntity {
    // relations
    @OneToOne(() => Court, (court) => court.schedule)
    court: Court;
    @OneToMany(() => Booktime, (booktime) => booktime.schedule)
    booktimes: Booktime[];
}
