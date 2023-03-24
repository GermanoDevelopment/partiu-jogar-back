import { Column, Entity, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../../common/abstract.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Profile extends AbstractEntity {
    @Column({ nullable: true })
    firstname: string;
    
    @Column({ nullable: true })
    lastname: string;

    // should this column be in user.entity for login purposes
    @Column({ unique: true, nullable: false })
    cpf: string;

    @Column({ nullable: false, default: false })
    confirmed: boolean;

    // relations
    @OneToOne(() => User, (user) => user.profile)
    user: User;
}
