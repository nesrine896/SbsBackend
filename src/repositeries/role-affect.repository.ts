/* eslint-disable prettier/prettier */

import { RoleAffect } from 'src/roleaffect/entities/roleaffect.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RoleAffect)
export class RoleAffectRepository extends Repository<RoleAffect> {}
