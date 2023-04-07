import { AbstractDto } from '../../../common/dto/AbstractDto';
import { User } from '../entities/user.entity';

export class UserDto extends AbstractDto {

  email: string;

  firstname: string;
  lastname: string;
  cpf: string;
  confirmed: boolean;

  constructor(entity: User) {
    super(entity);
    this.email = entity.email;
    this.firstname = entity.firstname;
    this.lastname = entity.lastname;
    this.cpf = entity.cpf;
    this.confirmed = entity.confirmed;
  }
}
