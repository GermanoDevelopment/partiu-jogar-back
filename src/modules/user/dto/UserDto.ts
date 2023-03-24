import { AbstractDto } from '../../../common/dto/AbstractDto';
import { User } from '../entities/user.entity';
import { Profile } from '../../profile/entities/profile.entity';

export class UserDto extends AbstractDto {

  email: string;

  firstname: string;
  lastname: string;
  cpf: string;
  confirmed: boolean;

  constructor(entity: User, profile: Profile) {
    super(entity);
    this.email = entity.email;

    this.firstname = profile.firstname;
    this.lastname = profile.lastname;
    this.cpf = profile.cpf;
    this.confirmed = profile.confirmed;
  }
}
