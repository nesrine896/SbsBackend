/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.getAllClient();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.getClientById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.updateClient(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.deleteClient(+id);
  }
}
