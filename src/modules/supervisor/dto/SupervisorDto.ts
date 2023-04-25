import { ERole } from '../../../constants/role.enum';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { Supervisor } from '../entities/supervisor.entity';

export class SupervisorDto extends AbstractDto {
  firstname: string;
  lastname: string;
  cpf: string;
  role: ERole;
  school: string;
  booktimes: string[];
  email: string;

  constructor(entity: Supervisor) {
    super(entity);
    this.firstname = entity.firstname;
    this.lastname = entity.lastname;
    this.cpf = entity.cpf;
    this.role = entity.role;
    if (entity.school)
      this.school = entity.school.id;
    if (entity.booktimes)
      this.booktimes = entity.booktimes.map((booktime) => booktime.id);
    this.email = entity.email;
  }
}
