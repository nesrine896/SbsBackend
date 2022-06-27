/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FicheService } from './fiche.service';
import { CreateFicheDto } from './dto/create-fiche.dto';
import { UpdateFicheDto } from './dto/update-fiche.dto';

@Controller('fiche')
export class FicheController {
  constructor(private readonly ficheService: FicheService) {}

  @Post()
  create(@Body() createFicheDto: CreateFicheDto) {
    return this.ficheService.createFiche(createFicheDto);
  }

  @Get()
  findAll() {
    return this.ficheService.getAllFiche();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheService.getFicheById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFicheDto: UpdateFicheDto) {
    return this.ficheService.updateFiche(+id, updateFicheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheService.deleteFiche(+id);
  }
}
