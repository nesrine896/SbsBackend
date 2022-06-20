import { Test, TestingModule } from '@nestjs/testing';
import { ProjetAffectedService } from './projet-affected.service';

describe('ProjetAffectedService', () => {
  let service: ProjetAffectedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjetAffectedService],
    }).compile();

    service = module.get<ProjetAffectedService>(ProjetAffectedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
