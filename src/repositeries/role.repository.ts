/* eslint-disable prettier/prettier */

import { Role } from 'src/role/entities/role.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
