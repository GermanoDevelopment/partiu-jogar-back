import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { School } from 'src/modules/school/entities/school.entity';
import { Court } from 'src/modules/court/entities/court.entity';

@Entity()
export class Image extends AbstractEntity {
    @Column()
    path: string;

    // relations
    @ManyToOne(() => School, (school) => school.images)
    school: School;
    @ManyToOne(() => Court, (court) => court.images)
    court: Court;
}
