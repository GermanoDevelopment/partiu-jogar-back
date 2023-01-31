import { AbstractEntity } from "../../../common/abstract.entity";
import { Column, Entity } from "typeorm";
import { ERole } from "../../../constants/role.enum";

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

    @Column({ nullable: false, default: ERole.USER, enum: ERole, type: "enum" })
    role: ERole;
    
    // relations
}
