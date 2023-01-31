import { Test, TestingModule } from '@nestjs/testing';
import { BooktimeService } from './booktime.service';

describe('BooktimeService', () => {
  let service: BooktimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooktimeService],
    }).compile();

    service = module.get<BooktimeService>(BooktimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
