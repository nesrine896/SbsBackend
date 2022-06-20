/* eslint-disable prettier/prettier */

import { Facture } from 'src/facture/entities/facture.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Facture)
export class FactureRepository extends Repository<Facture> {}
