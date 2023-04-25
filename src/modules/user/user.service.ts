import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { FindUserDto } from './dto/FindUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { UserDto } from './dto/UserDto';
import { User } from './entities/user.entity';
import { CommonUser } from './entities/common-user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(CommonUser)
    private readonly repo: Repository<CommonUser>,
  ) {}

  async findOneBy(options: Partial<FindUserDto>): Promise<CommonUser> {
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
    
    // TODO
    if (user) {
      // throw error "User already registered"
      console.log("User already exists.");
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
