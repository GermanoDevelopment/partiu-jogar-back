// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { ImageService } from '../../modules/image/image.service';

// import { UploadModule } from '../../modules/upload/upload.module';
// import { Image } from '../../modules/image/entities/image.entity';

// describe('ImageService', () => {
//   let service: ImageService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [ UploadModule ],
//       providers: [
//         ImageService,
//         {
//           provide: getRepositoryToken(Image),
//           useValue: {
//             create: jest.fn(),
//             save: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<ImageService>(ImageService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
