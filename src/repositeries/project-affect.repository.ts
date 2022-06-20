/* eslint-disable prettier/prettier */

import { ProjetAff } from 'src/projet-affected/entities/projet-affected.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProjetAff)
export class ProjectAffRepository extends Repository<ProjetAff> {}
