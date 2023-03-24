import { ERole } from '../../../constants/role.enum';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { Supervisor } from '../entities/supervisor.entity';

export class SupervisorDto extends AbstractDto {
  role: ERole;
  school: string;
  booktimes: string[];
  email: string;
  profileId: string;

  constructor(entity: Supervisor) {
    super(entity);
    this.role = entity.role;
    this.school = entity.school.id;
    this.booktimes = entity.booktimes.map((booktime) => booktime.id);
    this.email = entity.email;
    this.profileId = entity.profile.id;
  }
}
