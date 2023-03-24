import { AbstractDto } from '../../../common/dto/AbstractDto';
import { School } from '../entities/school.entity';

export class SchoolDto extends AbstractDto {
  name: string;
  address: string;

  constructor(entity: School) {
    super(entity);
    this.name = entity.name;
    this.address = entity.address;
  }
}
