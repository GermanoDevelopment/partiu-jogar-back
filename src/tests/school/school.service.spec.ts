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
import { IFile } from '../../interfaces/IFile';
import { FindSchoolDto } from '../../modules/school/dto/FindSchoolDto';
import TestUtil from '../../common/test/TestUtil';

describe('SchoolService', () => {
  let module: TestingModule;
  let service: SchoolService;
  let repo: Repository<School>;
  let image: ImageService;

  const mockSchoolRepository = {
    findBy: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const mockImageRepository = {
    findBy: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
    remove: jest.fn(),
  }
  
  class mockUploadService extends UploadService {
   uploadFile(file: IFile): Promise<string> {
    return Promise.resolve('mock')
   }
  }
  
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        SchoolService,
        {
          provide: getRepositoryToken(School),
          useValue: mockSchoolRepository,
        },
        ImageService,
        {
          provide: getRepositoryToken(Image),
          useValue: mockImageRepository,
        },
        {
          provide: UploadService,
          useValue: new mockUploadService()
        }
      ],
    }).compile();

    service = module.get<SchoolService>(SchoolService);
    repo = module.get<Repository<School>>(getRepositoryToken(School));
    image = module.get<ImageService>(ImageService);
  });

  describe('Service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
      expect(repo).toBeDefined();
      expect(image).toBeDefined();
    });
  });

  describe('findManyBy', () => {
    it('should call findBy method from repository with correct options', async () => {
      const school: Partial<FindSchoolDto> = TestUtil.giveMeAValidSchool();
      mockSchoolRepository.findBy.mockReturnValue({
        id: '1',
        name: 'Test School',
        address: '123 Main St',
        location: 'Test Location'
      });
      const schools = await service.findManyBy({
        id: '1',
        name: 'Test School',
        address: '123 Main St',
        location: 'Test Location'
      });
      expect(mockSchoolRepository.findBy).toHaveBeenCalledTimes(1);
      expect(mockSchoolRepository.findBy).toBeCalledWith({
        id: '1',
        name: 'Test School',
        address: '123 Main St',
        location: 'Test Location'
      })
      expect(schools).toEqual({
          id: '1',
          name: 'Test School',
          address: '123 Main St',
          location: 'Test Location'
      })
    });
  });
});
