import { TestingModule, Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ImageService } from '../../modules/image/image.service';
import { UploadService } from '../../modules/upload/upload.service';
import { Image } from '../../modules/image/entities/image.entity';
import { Repository } from 'typeorm';
import { mockImageRepository } from './mockImage.repository';
import { CreateImageDto } from '../../modules/image/dto/CreateImageDto';
import { ImageDto } from '../../modules/image/dto/ImageDto';
import fs from 'fs';
import { School } from 'src/modules/school/entities/school.entity';
import { Court } from 'src/modules/court/entities/court.entity';
import { InjectionToken } from '@nestjs/common';

describe('ImageService', () => {
  let imageService: ImageService;
  let uploadService: UploadService;
  let moduleRef: TestingModule;
  let imageRepository: Repository<Image>;
  let uploadServiceToken: InjectionToken;

  class UploadServiceMock extends UploadService {
    async uploadFile(file): Promise<string> {
      return 'path/to/image.jpg';
    }
  }

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      providers: [
        ImageService,
        {
          provide: uploadServiceToken,
          useClass: UploadServiceMock
        },
        {
          provide: getRepositoryToken(Image),
          useValue: mockImageRepository,
        },
      ],
    }).compile();

    imageService = moduleRef.get<ImageService>(ImageService);
    uploadService = moduleRef.get<UploadService>(UploadService);
    imageRepository = moduleRef.get<Repository<Image>>(
      getRepositoryToken(Image),
    );
  });

  afterEach(async () => {
    await moduleRef.close();
  });

  describe('create', () => {
    it('should create a new image', async () => {
      const file = {
        fieldname: 'file',
        originalname: 'test.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        size: 7168,
        buffer: Buffer.from('test'),
        stream: fs.createReadStream('path/to/image.jpg'),
        destination: 'path/to/destination',
        filename: 'image.jpg',
        path: 'path/to/destination/image.jpg'
      };
      jest.spyOn(uploadService, 'uploadFile').mockResolvedValue('path/to/image.jpg');
      const createImageDto: CreateImageDto = {
        schoolId: '123',
        courtId: '456',
      };

      const result: ImageDto = await imageService.create(createImageDto, file);
      const image = new Image();
      image.id = 'test-id';
      image.school = new School();
      image.court = new Court();
      image.path = 'path/to/image.jpg';

      expect(uploadService.uploadFile).toHaveBeenCalledWith(file);
      expect(imageRepository.create).toHaveBeenCalledWith({
        schoolId: createImageDto.schoolId,
        courtId: createImageDto.courtId,
        path: 'path/to/image.jpg',
      });
      expect(imageRepository.save).toHaveBeenCalled();
      expect(result).toEqual(new ImageDto(image));
    });
  });
});
