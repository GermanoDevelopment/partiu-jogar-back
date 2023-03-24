import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, OneToOne, TableInheritance } from 'typeorm';
import { Profile } from '../../profile/entities/profile.entity';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends AbstractEntity {
    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: true })
    password: string;

    // relations
    @OneToOne(() => Profile, (profile) => profile.user, {
        eager: true,
    })
    profile: Profile;
}
