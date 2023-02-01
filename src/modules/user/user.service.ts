import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
      return await this.repo.save(createUserDto);
    }

  async findBy(options: Partial<{
    id: string,
    cpf: string,
    name: string,
    email: string
  }>): Promise<User> {
    return await this.repo.findOneBy({
      id: options.id,
      cpf: options.cpf,
      firstname: options.name,
      email: options.email,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.repo.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.findBy({ id });
  }

  async update(id: string, UpdateUserDto: UpdateUserDto): Promise<User> {
    await this.repo.update(id, UpdateUserDto);
    return await this.findBy({ id });
  }

  async remove(id: string): Promise<User> {
    const removed = await this.findBy({ id });
    await this.repo.delete(id);
    return removed;
  }
}
