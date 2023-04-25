import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { UserDto } from '../modules/user/dto/UserDto';

// TODO: return UserDto or DecodedJwt
export function LoggedUser() {
  return createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    
    const user = request.user;

    if (user?.[Symbol.for('isPublic')]) {
      return null;
    }

    return new UserDto(user);
  })();
}