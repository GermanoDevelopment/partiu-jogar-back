import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, TableInheritance } from 'typeorm';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends AbstractEntity {
    @Column({ nullable: true })
    firstname: string;
    
    @Column({ nullable: true })
    lastname: string;

    // should this column be in user.entity for login purposes
    @Column({ unique: true, nullable: false })
    cpf: string;

    @Column({ nullable: false, default: false })
    confirmed: boolean;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: true })
    password: string;
}
