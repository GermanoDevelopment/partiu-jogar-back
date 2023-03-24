import { Injectable } from '@nestjs/common';

import { UserDto } from '../user/dto/UserDto';
import { AuthUserDto } from './dto/AuthUserDto';
import { CreateUserDto } from "../user/dto/CreateUserDto";
import { CredentialsDto } from './dto/CredentialsDto';

@Injectable()
export abstract class AuthService {
  abstract validateUser(credentials: CredentialsDto): Promise<UserDto>;
  abstract login(credentials: CredentialsDto): Promise<AuthUserDto>;
  abstract registerUser(createUserDto: CreateUserDto): Promise<UserDto>;
}
