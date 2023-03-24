import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileService } from '../profile/profile.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { FindUserDto } from './dto/FindUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { UserDto } from './dto/UserDto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    readonly profileService: ProfileService,
  ) {}

  async findOneBy(options: Partial<FindUserDto>): Promise<User> {
    return await this.repo.findOneBy({
      id: options.id,
      email: options.email,
    });
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    let user = this.repo.create();

    const createProfile = { 
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      cpf: createUserDto.cpf,
      confirmed: false,
    };
    const profileDto = await this.profileService.create(createProfile);
    const profile = await this.profileService.findOneBy({ id: profileDto.id });
    
    user = { ...user, ...createUserDto, profile };

    await this.repo.save(createUserDto);
    // console.log(user);
    
    return new UserDto(user, user.profile);
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.repo.find();
    return users.map((user) => new UserDto(user, user.profile));
  }

  async findOne(id: string): Promise<UserDto> {
    const user = await this.findOneBy({ id });
    return new UserDto(user, user.profile);
  }

  async update(id: string,updateUserDto: UpdateUserDto): Promise<UserDto> {
    let user = await this.findOneBy({ id });
    user = { ...user, ...updateUserDto };

    await this.repo.update(id, user);
    console.log(user);
    
    return await this.findOne(id);
  }

  async remove(id: string): Promise<UserDto> {
    const user = await this.findOneBy({ id });
    await this.repo.delete(id);
    return new UserDto(user, user.profile);
  }
}
