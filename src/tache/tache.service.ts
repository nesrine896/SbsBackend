/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTacheDto } from './dto/create-tache.dto';
import { UpdateTacheDto } from './dto/update-tache.dto';
import { Tache } from './entities/tache.entity';

  @Injectable()
  export class TacheService {
    constructor(
      @InjectRepository(Tache) private repository: Repository<Tache>,
    ) {}
    async getAllTache(){
      return this.repository.find();
    }
    async getTacheById(id: number): Promise<Tache> {
      const tache = this.repository.findOne(id);
      if(tache) {
        return tache;
      }
      throw new HttpException('tache not found', HttpStatus.NOT_FOUND);
    }

    // create
    public createTache(body: CreateTacheDto): Promise<Tache> {
      const tache: Tache = new Tache();
      tache.tacheR = body.tachR;
      tache.isUrgent = body.isUrgent;
  
      return this.repository.save(tache);
  }

  //update
  async updateTache(id: number, tache: UpdateTacheDto) {
    await this.repository.update(id, tache);
    const updateTache = await this.repository.findOne(id);
    if (updateTache) {
      return updateTache;
    }

    throw new HttpException('tache not found', HttpStatus.NOT_FOUND);
  }
//delete
async deleteTache(id: number) {
  const deleteTache = await this.repository.delete(id);
  if (!deleteTache.affected) {
    throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }
}
}
