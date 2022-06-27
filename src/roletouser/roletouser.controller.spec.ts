import { Test, TestingModule } from '@nestjs/testing';
import { RoletouserController } from './roletouser.controller';
import { RoletouserService } from './roletouser.service';

describe('RoletouserController', () => {
  let controller: RoletouserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoletouserController],
      providers: [RoletouserService],
    }).compile();

    controller = module.get<RoletouserController>(RoletouserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
