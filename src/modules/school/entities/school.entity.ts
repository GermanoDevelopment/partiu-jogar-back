import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { Supervisor } from '../../supervisor/entities/supervisor.entity';
import { Court } from '../../court/entities/court.entity';
import { Image } from '../../image/entities/image.entity';

@Entity()
export class School extends AbstractEntity {
    @Column({ nullable: false })
    name: string;
    @Column({ nullable: true })
    address: string;
    @Column({ nullable: true })
    location: string;
    
    // relations
    @OneToMany(() => Court, (court) => court.school)
    court: Court[];
    @OneToMany(() => Supervisor, (supervisor) => supervisor.school)
    supervisors: Supervisor[];

    @OneToOne(() => Image, (image) => image.schoolMain)
    main: Image[];
    @OneToMany(() => Image, (image) => image.school)
    images: Image[];
}
