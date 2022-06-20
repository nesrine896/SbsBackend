import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FicheService } from './fiche.service';
import { CreateFicheDto } from './dto/create-fiche.dto';
import { UpdateFicheDto } from './dto/update-fiche.dto';

@Controller('fiche')
export class FicheController {
  constructor(private readonly ficheService: FicheService) {}

  @Post()
  create(@Body() createFicheDto: CreateFicheDto) {
    return this.ficheService.create(createFicheDto);
  }

  @Get()
  findAll() {
    return this.ficheService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficheService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFicheDto: UpdateFicheDto) {
    return this.ficheService.update(+id, updateFicheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheService.remove(+id);
  }
}
