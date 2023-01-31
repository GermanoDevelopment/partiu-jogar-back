import { Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { AuthUserDto } from './dto/AuthUserDto';
import { CreateUserDto } from "../user/dto/CreateUserDto";
import { CredentialsDto } from './dto/CredentialsDto';

@Injectable()
export abstract class AuthService {
  abstract validateUser(credentials: CredentialsDto): Promise<User>;
  abstract login(credentials: CredentialsDto): Promise<AuthUserDto>;
  abstract registerUser(createUserDto: CreateUserDto): Promise<User>;
}
