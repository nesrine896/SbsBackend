/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';

@Controller('projet')
export class ProjetController {
  constructor(private readonly projetService: ProjetService) {}

  @Post()
  create(@Body() createProjetDto: CreateProjetDto) {
    return this.projetService.createProjet(createProjetDto);
  }

  @Get()
  findAll() {
    return this.projetService.getAllProjet();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetService.getProjetById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjetDto: UpdateProjetDto) {
    return this.projetService.updateProjet(+id, updateProjetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetService.deleteProjet(+id);
  }
}
