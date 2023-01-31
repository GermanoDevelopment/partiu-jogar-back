import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { CreateUserDto } from './dto/CreateUserDto';
import { FindUserDto } from './dto/FindUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Get('get-all-users')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('get-user/:id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Patch('update-user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete('delete-user/:id')
  async remove(@Param('id') id: string): Promise<User> {
    return await this.userService.remove(id);
  }
}
