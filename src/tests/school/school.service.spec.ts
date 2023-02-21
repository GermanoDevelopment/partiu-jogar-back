import { Test, TestingModule } from '@nestjs/testing';

import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { SchoolService } from '../../modules/school/school.service';
import { School } from '../../modules/school/entities/school.entity';

import { CreateSchoolDto } from '../../modules/school/dto/CreateSchoolDto';
import { SchoolDto } from '../../modules/school/dto/SchoolDto';

describe('SchoolService', () => {
  let service: SchoolService;
  let repo: Repository<School>;

  const USER_TOKEN_REPO = getRepositoryToken(School);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SchoolService,
        { 
          provide: USER_TOKEN_REPO,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<SchoolService>(SchoolService);
    repo = module.get<Repository<School>>(USER_TOKEN_REPO);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('School Repository', () => {
    it('school repo should be defined', () => {
      expect(repo).toBeDefined();
    });
  });

  describe('CRUD', () => {
    it('should create a school', async () => {
      const _school = {
        name: "Colégio Petrônio Portela",
      } as CreateSchoolDto;
      const school = await service.create(_school);
      expect(repo.save).toHaveBeenCalledWith({
        name: _school.name
      });
      expect(repo.save);
    });

    it('should return all schools created', async () => {
      const result = [
        {name: 'Colégio do Mock'} as SchoolDto,
      ] as SchoolDto[];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);
      expect(await service.findAll()).toBe(result);
    });
    
    // Read
    // it('should return one school with id', () => {});
    // it('should return one school with name', () => {});
    // Update
    // it('should update one school with id', () => {});
    // it('should update one school with name', () => {});
    // Delete
    // it('should delete one school with id', () => {});
    // it('should delete one school with name', () => {});
  });

  // describe('School optional insertions', () => {
    // add address
    // update address
    // remove address
    // add location
    // update location
    // remove location
    // add images
    // remove images
  // });
  // describe('School courts', () => {
    // add court
    // remove court
    // get courts
  // });
  // describe('School supervisors', () => {
    // add supervisors
    // remove supervisors
    // get supervisors
  // });
});
