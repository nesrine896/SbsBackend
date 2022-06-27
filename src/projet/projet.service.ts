/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';
import { Projet } from './entities/projet.entity';

@Injectable()
export class ProjetService {
  constructor(
    @InjectRepository(Projet) private repository: Repository<Projet>,
  ) {}

  async getAllProjet(){
    return this.repository.find();
  }

  async getProjetById(id: number): Promise<Projet> {
    const projet = this.repository.findOne(id);
    if(projet) {
      return projet;
    }
    throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }

  public createProjet(body: CreateProjetDto): Promise<Projet> {
    const projet: Projet = new Projet();
    projet.title = body.title;
    projet.nomsociete = body.nomsociete;
    projet.description = body.description;
    return this.repository.save(projet);
}

async updateProjet(id: number, projet: UpdateProjetDto) {
  await this.repository.update(id, projet);
  const updatedProjet = await this.repository.findOne(id);
  if (updatedProjet) {
    return updatedProjet;
  }

  throw new HttpException('projet not found', HttpStatus.NOT_FOUND);
}
async deleteProjet(id: number) {
  const deletedProjet = await this.repository.delete(id);
  if (!deletedProjet.affected) {
    throw new HttpException('Projet not found', HttpStatus.NOT_FOUND);
  }
}
}
