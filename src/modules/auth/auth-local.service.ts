import { Injectable } from "@nestjs/common";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { AuthUserDto } from "./dto/AuthUserDto";
import { JwtResponseDto } from "./dto/JwtResponseDto";
import { CreateUserDto } from "../user/dto/CreateUserDto";
import { CredentialsDto } from "./dto/CredentialsDto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthLocalService implements AuthService {
    
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}
    
    async login(credentials: CredentialsDto): Promise<AuthUserDto> {
        const user = await this.userService.findBy({ email: credentials.email });
        let jwtRes = new JwtResponseDto("", "");
        jwtRes.access_token = this.jwtService.sign({
            id: user.id,
            name: user.name,
            email: user.email,
        });
        return new AuthUserDto({ name: user.name, email: user.email }, jwtRes);
    }
    
    async validateUser(credentials: CredentialsDto): Promise<User> {
        const user = await this.userService.findBy({ email: credentials.email });
        
        if (user && user.password === credentials.password) {
            return user;
        }
        return null;
    }

    async registerUser(createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(createUserDto);
    }
}