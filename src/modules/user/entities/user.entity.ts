import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ERole } from '../../../constants/role.enum';
import { Booktime } from '../../../modules/booktime/entities/booktime.entity';

@Entity()
export class User extends AbstractEntity {
    @Column({ nullable: true })
    firstname: string;
    
    @Column({ nullable: true })
    lastname: string;
    
    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ unique: true, nullable: false })
    cpf: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: false, default: false })
    confirmed: boolean;

    @Column({ nullable: false, default: ERole.USER, enum: ERole, type: 'enum' })
    role: ERole;
    
    // relations
    @OneToMany(() => Booktime, (booktime) => booktime.applicant)
    booktimes: Booktime[];
}
