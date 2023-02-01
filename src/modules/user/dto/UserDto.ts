import { OmitType, PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserDto extends OmitType(
  User,
  ["createdAt", "updatedAt"]
) {}
