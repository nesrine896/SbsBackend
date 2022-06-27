/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFicheDto } from './dto/create-fiche.dto';
import { UpdateFicheDto } from './dto/update-fiche.dto';
import { Fiche } from './entities/fiche.entity';

  @Injectable()
  export class FicheService {
    constructor(
      @InjectRepository(Fiche) private repository: Repository<Fiche>,
    ) {}
    async getAllFiche(){
      return this.repository.find();
    }
    async getFicheById(id: number): Promise<Fiche> {
      const fiche = this.repository.findOne(id);
      if(fiche) {
        return fiche;
      }
      throw new HttpException('fiche not found', HttpStatus.NOT_FOUND);
    }
 // create
 public createFiche(body: CreateFicheDto): Promise<Fiche> {
  const fiche: Fiche = new Fiche();
  fiche.frais_transport = body.frais_transport;
  fiche.date = body.date;
  fiche.nbheure = body.nbheure;
  fiche.typetravail = body.typetravail;

  return this.repository.save(fiche);
}

 //update
 async updateFiche(id: number, fiche: UpdateFicheDto) {
  await this.repository.update(id, fiche);
  const  updateFiche = await this.repository.findOne(id);
  if ( updateFiche) {
    return  updateFiche;
  }

  throw new HttpException('fiche not found', HttpStatus.NOT_FOUND);
}
  //delete
  async deleteFiche(id: number) {
    const deletedFiche = await this.repository.delete(id);
    if (!deletedFiche.affected) {
      throw new HttpException('Fiche not found', HttpStatus.NOT_FOUND);
    }
  }
}
