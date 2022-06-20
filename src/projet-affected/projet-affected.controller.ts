/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjetAffectedService } from './projet-affected.service';
import { CreateProjetAffectedDto } from './dto/create-projet-affected.dto';
import { UpdateProjetAffectedDto } from './dto/update-projet-affected.dto';

@Controller('projet-affected')
export class ProjetAffectedController {
  constructor(private readonly projetAffectedService: ProjetAffectedService) {}

  @Post()
  create(@Body() createProjetAffectedDto: CreateProjetAffectedDto) {
    return this.projetAffectedService.create(createProjetAffectedDto);
  }

  @Get()
  findAll() {
    return this.projetAffectedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetAffectedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjetAffectedDto: UpdateProjetAffectedDto) {
    return this.projetAffectedService.update(+id, updateProjetAffectedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetAffectedService.remove(+id);
  }
}
