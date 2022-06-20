import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleaffectService } from './roleaffect.service';
import { CreateRoleaffectDto } from './dto/create-roleaffect.dto';
import { UpdateRoleaffectDto } from './dto/update-roleaffect.dto';

@Controller('roleaffect')
export class RoleaffectController {
  constructor(private readonly roleaffectService: RoleaffectService) {}

  @Post()
  create(@Body() createRoleaffectDto: CreateRoleaffectDto) {
    return this.roleaffectService.create(createRoleaffectDto);
  }

  @Get()
  findAll() {
    return this.roleaffectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleaffectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleaffectDto: UpdateRoleaffectDto) {
    return this.roleaffectService.update(+id, updateRoleaffectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleaffectService.remove(+id);
  }
}
