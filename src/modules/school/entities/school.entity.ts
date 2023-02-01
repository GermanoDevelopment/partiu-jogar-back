import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Supervisor } from '../../../modules/supervisor/entities/supervisor.entity';
import { Court } from '../../../modules/court/entities/court.entity';

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
}
