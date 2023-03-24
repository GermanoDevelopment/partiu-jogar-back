import { AbstractDto } from '../../../common/dto/AbstractDto';
import { Booktime } from '../entities/booktime.entity';

export class BooktimeDto extends AbstractDto {
  startDate: Date;
  endDate: Date;
  reserved: boolean;
  approved: boolean;
  applicantId: string;
  supervisorId: string;
  courtId: string;

  constructor(entity: Booktime) {
    super(entity);
    this.startDate = entity.startDate;
    this.endDate = entity.endDate;
    this.reserved = entity.reserved;
    this.approved = entity.approved;
    this.applicantId = entity.applicant.id;
    this.supervisorId = entity.supervisor.id;
    this.courtId = entity.court.id;
  }
}
