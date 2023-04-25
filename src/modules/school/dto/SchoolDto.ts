import { AbstractDto } from '../../../common/dto/AbstractDto';
import { School } from '../entities/school.entity';

export class SchoolDto extends AbstractDto {
  name: string;
  address: string;
  location: string;

  constructor(entity: School) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
    this.location = entity.location;
  }
}
