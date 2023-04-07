import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  ) {}

  async findOneBy(options: Partial<FindUserDto>): Promise<User> {
    return await this.repo.findOneBy({
      id: options.id,
      email: options.email,
    });
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    // check if has already a profile for that creation
    let user = await this.findOneBy({
      cpf: createUserDto.cpf,
      email: createUserDto.email,
    });
    
    if (user) {
      // throw error "User already registered"
      return;
    }
    
    user = this.repo.create();
    // assign data
    user = { ...user, ...createUserDto };
    // save user
    await this.repo.save(user);
    // console.log(user);
    // return dto
    return new UserDto(user);
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.repo.find();
    return users.map((user) => new UserDto(user));
  }

  async findOne(id: string): Promise<UserDto> {
    const user = await this.findOneBy({ id });
    return new UserDto(user);
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
    return new UserDto(user);
  }
}
