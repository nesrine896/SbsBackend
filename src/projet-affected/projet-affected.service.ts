import { Injectable } from '@nestjs/common';
import { CreateProjetAffectedDto } from './dto/create-projet-affected.dto';
import { UpdateProjetAffectedDto } from './dto/update-projet-affected.dto';

@Injectable()
export class ProjetAffectedService {
  create(createProjetAffectedDto: CreateProjetAffectedDto) {
    return 'This action adds a new projetAffected';
  }

  findAll() {
    return `This action returns all projetAffected`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projetAffected`;
  }

  update(id: number, updateProjetAffectedDto: UpdateProjetAffectedDto) {
    return `This action updates a #${id} projetAffected`;
  }

  remove(id: number) {
    return `This action removes a #${id} projetAffected`;
  }
}
