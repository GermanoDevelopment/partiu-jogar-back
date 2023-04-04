import { TestingModule, Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ImageModule } from '../../modules/image/image.module';
import { ImageService } from '../../modules/image/image.service';
import { SchoolService } from '../../modules/school/school.service';

import { School } from '../../modules/school/entities/school.entity';
import { CreateSchoolDto } from '../../modules/school/dto/CreateSchoolDto';
import { Image } from '../../modules/image/entities/image.entity';
import { UploadModule } from '../../modules/upload/upload.module';
import { UploadService } from '../../modules/upload/upload.service';

describe('SchoolService', () => {
  let moduleRef: TestingModule;
  let service: SchoolService;
  let repo: Repository<School>;
  
  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [ ImageModule ],
      providers: [
        SchoolService,
        {
          provide: getRepositoryToken(School),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<SchoolService>(SchoolService);
    repo = moduleRef.get<Repository<School>>(getRepositoryToken(School));
  });

  describe('Service', () => {
    it('should be defined', ()=> {
      expect(service).toBeDefined();
      expect(repo).toBeDefined();
    });
  });

  // describe('CRUD', () => {
  //   it('should create a new school', async () => {
  //     const create: CreateSchoolDto = {
  //       name: 'string',
  //       location: 'string',
  //       address: 'string',
  //     };
  //     const result = await service.create(create, { main: null, photos: null });
  //     expect(result).toBeDefined();
  //     expect(repo.create).toBeCalledTimes(1);
  //     expect(repo.save).toBeCalledTimes(1);
  //   });
  // });
});
