/* eslint-disable prettier/prettier */

import { Tache } from 'src/tache/entities/tache.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tache)
export class TacheRepository extends Repository<Tache> {}
