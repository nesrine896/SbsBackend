import { Test, TestingModule } from '@nestjs/testing';
import { RoleaffectController } from './roleaffect.controller';
import { RoleaffectService } from './roleaffect.service';

describe('RoleaffectController', () => {
  let controller: RoleaffectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleaffectController],
      providers: [RoleaffectService],
    }).compile();

    controller = module.get<RoleaffectController>(RoleaffectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
