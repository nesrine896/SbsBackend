import { Injectable } from '@nestjs/common';
import { CreateFicheDto } from './dto/create-fiche.dto';
import { UpdateFicheDto } from './dto/update-fiche.dto';

@Injectable()
export class FicheService {
  create(createFicheDto: CreateFicheDto) {
    return 'This action adds a new fiche';
  }

  findAll() {
    return `This action returns all fiche`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fiche`;
  }

  update(id: number, updateFicheDto: UpdateFicheDto) {
    return `This action updates a #${id} fiche`;
  }

  remove(id: number) {
    return `This action removes a #${id} fiche`;
  }
}
