/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersToRoleService } from './roletouser.service';
import { RoletouserController } from './roletouser.controller';
import { UsersToRole } from './entities/roletouser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersToRole])],
  controllers: [RoletouserController],
  providers: [UsersToRoleService]
})
export class RoletouserModule {}
