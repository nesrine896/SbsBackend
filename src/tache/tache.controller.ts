/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TacheService } from './tache.service';
import { CreateTacheDto } from './dto/create-tache.dto';
import { UpdateTacheDto } from './dto/update-tache.dto';

@Controller('tache')
export class TacheController {
  constructor(private readonly tacheService: TacheService) {}

  @Post()
  create(@Body() createTacheDto: CreateTacheDto) {
    return this.tacheService.createTache(createTacheDto);
  }

  @Get()
  findAll() {
    return this.tacheService.getAllTache();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tacheService.getTacheById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTacheDto: UpdateTacheDto) {
    return this.tacheService.updateTache(+id, updateTacheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tacheService.deleteTache(+id);
  }
}
