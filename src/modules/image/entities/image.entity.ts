import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { School } from 'src/modules/school/entities/school.entity';
import { Court } from 'src/modules/court/entities/court.entity';

@Entity()
export class Image extends AbstractEntity {
    @Column()
    path: string;

    // relations
    @OneToOne(() => School, (school) => school.images)
    schoolMain: School;
    @ManyToOne(() => School, (school) => school.images)
    school: School;

    @OneToOne(() => Court, (court) => court.main)
    courtMain: Court;
    @ManyToOne(() => Court, (court) => court.images)
    court: Court;
}
