import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Court } from '../../../modules/court/entities/court.entity';
import { Supervisor } from '../../../modules/supervisor/entities/supervisor.entity';

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
    @ManyToOne(() => Supervisor, (supervisor) => supervisor.school)
    supervisor: Supervisor[];
}
