import { Test, TestingModule } from '@nestjs/testing';
import { BooktimeController } from './booktime.controller';
import { BooktimeService } from './booktime.service';

describe('BooktimeController', () => {
  let controller: BooktimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooktimeController],
      providers: [BooktimeService],
    }).compile();

    controller = module.get<BooktimeController>(BooktimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
