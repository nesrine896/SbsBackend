import { Module } from '@nestjs/common';
import { RoleaffectService } from './roleaffect.service';
import { RoleaffectController } from './roleaffect.controller';

@Module({
  controllers: [RoleaffectController],
  providers: [RoleaffectService]
})
export class RoleaffectModule {}
