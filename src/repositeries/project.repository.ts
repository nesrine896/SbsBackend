/* eslint-disable prettier/prettier */

import { Projet } from 'src/projet/entities/projet.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Projet)
export class ProjetRepository extends Repository<Projet> {}
