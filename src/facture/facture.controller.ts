/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';

@Controller('facture')
export class FactureController {
  constructor(private readonly factureService: FactureService) {}

  @Post()
  create(@Body() createFactureDto: CreateFactureDto) {
    return this.factureService.createFacture(createFactureDto);
  }

  @Get()
  findAll() {
    return this.factureService.getAllFacture();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureService.getFactureById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFactureDto: UpdateFactureDto) {
    return this.factureService.updateFacture(+id, updateFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factureService.deleteFacture(+id);
  }
}
