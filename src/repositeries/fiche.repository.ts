/* eslint-disable prettier/prettier */

import { Fiche } from 'src/fiche/entities/fiche.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Fiche)
export class FicheRepository extends Repository<Fiche> {}
