import { Test, TestingModule } from '@nestjs/testing';
import { ProjetAffectedController } from './projet-affected.controller';
import { ProjetAffectedService } from './projet-affected.service';

describe('ProjetAffectedController', () => {
  let controller: ProjetAffectedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjetAffectedController],
      providers: [ProjetAffectedService],
    }).compile();

    controller = module.get<ProjetAffectedController>(ProjetAffectedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
