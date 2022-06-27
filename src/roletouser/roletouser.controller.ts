/* eslint-disable @typescript-eslint/no-unused-vars */
import { UsersToRoleService } from './roletouser.service';
import { CreateRoletouserDto } from './dto/create-roletouser.dto';
import { UpdateRoletouserDto } from './dto/update-roletouser.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('roletouser')
export class RoletouserController {
  constructor(private readonly roletouserService: UsersToRoleService) {}

  @Post()
  create(@Body() createRoletouserDto: CreateRoletouserDto) {
    return this.roletouserService.createRoleAffect(createRoletouserDto);
  }

  @Get()
  findAll() {
    return this.roletouserService.getAllRoleAffect();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roletouserService.getRoleAffectById(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roletouserService.deleteUserToRole(+id);
  }
}
