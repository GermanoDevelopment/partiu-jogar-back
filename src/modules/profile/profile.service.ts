import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

import { Profile } from './entities/profile.entity';
import { ProfileDto } from './dto/ProfileDto';
import { FindProfileDto } from './dto/FindProfileDto';
import { CreateProfileDto } from './dto/CreateProfileDto';
import { UpdateProfileDto } from './dto/UpdateProfileDto';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    readonly repo: Repository<Profile>,
    @Inject(forwardRef(() => UserService))
    readonly userService: UserService,
  ) {}

  async findManyBy(options: Partial<FindProfileDto>): Promise<Profile[]> {
    const user = await this.userService.findOneBy({ id: options.userId });
    return await this.repo.findBy({
      id: options.id,
      // confirmed,
      cpf: options.cpf,
      firstname: options.firstname,
      lastname: options.lastname,
      user,
    });
  }

  async findOneBy(options: Partial<FindProfileDto>): Promise<Profile> {
    const profiles = await this.findManyBy(options) as Profile[];
    return profiles[0];
  }

  async create(createProfileDto: CreateProfileDto): Promise<ProfileDto> {
    let profile = this.repo.create();
    profile = { ...profile, ...createProfileDto };

    await this.repo.save(profile);
    // console.log(profile);
    
    return new ProfileDto(profile);
  }

  async findAll(): Promise<ProfileDto[]> {
    const profiles = await this.repo.find();
    return profiles.map((profile) => new ProfileDto(profile));
  }

  async findOne(id: string): Promise<ProfileDto> {
    const profile = await this.findOneBy({ id });
    return new ProfileDto(profile);
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<ProfileDto> {
    let profile = await this.findOneBy({ id });
    profile = { ...profile, ...updateProfileDto };

    await this.repo.update(id, profile);
    // console.log(profile);
    
    return await this.findOne(id);
  }

  async remove(id: string): Promise<ProfileDto> {
    const profile = await this.findOneBy({ id });
    await this.repo.remove(profile);
    return new ProfileDto(profile);
  }
}
