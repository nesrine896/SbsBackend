/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { Facture } from './entities/facture.entity';

@Injectable()
  export class FactureService {
    constructor(
      @InjectRepository(Facture) private repository: Repository<Facture>,
    ) {}

    async getAllFacture(){
      return this.repository.find();
    }

    async getFactureById(id: number): Promise<Facture> {
      const users = this.repository.findOne(id);
      if(users) {
        return users;
      }
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }

    // create
    public createFacture(body: CreateFactureDto): Promise<Facture> {
      const facture: Facture = new Facture();
      facture.modefacture = body.modefacture;
      facture.prix = body.prix;

      return this.repository.save(facture);
  }
 //update
 async updateFacture(id: number, facture: UpdateFactureDto) {
  await this.repository.update(id, facture);
  const  updateFacture = await this.repository.findOne(id);
  if ( updateFacture) {
    return  updateFacture;
  }

  throw new HttpException('facture not found', HttpStatus.NOT_FOUND);
}
  //delete
  async deleteFacture(id: number) {
    const deletedFacture = await this.repository.delete(id);
    if (!deletedFacture.affected) {
      throw new HttpException('Facture not found', HttpStatus.NOT_FOUND);
    }
  }
}
