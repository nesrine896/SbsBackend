import { Test, TestingModule } from '@nestjs/testing';
import { RoletouserService } from './roletouser.service';

describe('RoletouserService', () => {
  let service: RoletouserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoletouserService],
    }).compile();

    service = module.get<RoletouserService>(RoletouserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
