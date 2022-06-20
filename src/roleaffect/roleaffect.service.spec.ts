import { Test, TestingModule } from '@nestjs/testing';
import { RoleaffectService } from './roleaffect.service';

describe('RoleaffectService', () => {
  let service: RoleaffectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleaffectService],
    }).compile();

    service = module.get<RoleaffectService>(RoleaffectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
