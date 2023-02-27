import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

import { UserDto } from '../user/dto/UserDto';
import { AuthUserDto } from './dto/AuthUserDto';
import { JwtResponseDto } from './dto/JwtResponseDto';
import { CreateUserDto } from '../user/dto/CreateUserDto';
import { CredentialsDto } from './dto/CredentialsDto';

@Injectable()
export class AuthLocalService implements AuthService {
    
    constructor(
        readonly userService: UserService,
        readonly jwtService: JwtService,
    ) {}
    
    async login(credentials: CredentialsDto): Promise<AuthUserDto> {
        const user = await this.userService.findOneBy({ email: credentials.email });
        const signUser = new UserDto(user, user.profile);

        let jwtRes = new JwtResponseDto('', '');
        jwtRes.access_token = this.jwtService.sign({
            id: signUser.id,
            name: signUser.firstname,
            email: signUser.email,
        });
        return new AuthUserDto({ name: signUser.firstname, email: signUser.email }, jwtRes);
    }
    
    async validateUser(credentials: CredentialsDto): Promise<UserDto> {
        const user = await this.userService.findOneBy({ email: credentials.email });
        
        if (user && user.password === credentials.password) {
            return new UserDto(user, user.profile);
        }
        return null;
    }

    async registerUser(createUserDto: CreateUserDto): Promise<UserDto> {
        return await this.userService.create(createUserDto);
    }
}
