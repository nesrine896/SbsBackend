/* eslint-disable prettier/prettier */

import { Admin } from 'src/admin/entities/admin.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {}
