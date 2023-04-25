import { AbstractDto } from '../../../common/dto/AbstractDto';
import { CommonUser } from '../entities/common-user.entity';
import { ERole } from '../../../constants/role.enum';

export class UserDto extends AbstractDto {

  email: string;

  firstname: string;
  lastname: string;
  cpf: string;
  confirmed: boolean;

  role: ERole;

  constructor(entity: CommonUser) {
    super(entity);
    this.email = entity.email;
    this.firstname = entity.firstname;
    this.lastname = entity.lastname;
    this.cpf = entity.cpf;
    this.confirmed = entity.confirmed;
    this.role = entity.role;
  }
}
