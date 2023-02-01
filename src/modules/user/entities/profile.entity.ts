import { Column } from "typeorm";
import { AbstractEntity } from "../../../common/abstract.entity";

export abstract class Profile extends AbstractEntity {
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
}
