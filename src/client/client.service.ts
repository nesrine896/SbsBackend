/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

  @Injectable()
  export class ClientService {
    constructor(
      @InjectRepository(Client) private repository: Repository<Client>,
    ) {}
    async getAllClient(){
      return this.repository.find();
    }

    async getClientById(id: number): Promise<Client> {
      const client = this.repository.findOne(id);
      if(client) {
        return client;
      }
      throw new HttpException('fiche not found', HttpStatus.NOT_FOUND);
    }
 // create
 public createClient(body: CreateClientDto): Promise<Client> {
  const client: Client = new Client();
  client.codeClient = body.codeClient;
  client.nomClient = body.nomClient;

  return this.repository.save(client);
}
 //update
 async updateClient(id: number, client: UpdateClientDto) {
  await this.repository.update(id, client);
  const  updateClient = await this.repository.findOne(id);
  if ( updateClient) {
    return  updateClient;
  }

  throw new HttpException('client not found', HttpStatus.NOT_FOUND);
}
async deleteClient(id: number) {
  const deletedClient = await this.repository.delete(id);
  if (!deletedClient.affected) {
    throw new HttpException('Fiche not found', HttpStatus.NOT_FOUND);
  }
}
}
