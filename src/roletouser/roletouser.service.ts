/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoletouserDto } from './dto/create-roletouser.dto';
import { UsersToRole } from './entities/roletouser.entity';

@Injectable()
export class UsersToRoleService {
  constructor(
    @InjectRepository(UsersToRole) private repository: Repository<UsersToRole>,
  ) {}

  async getAllRoleAffect(){
    return this.repository.find();
  }

  async getRoleAffectById(id: number): Promise<UsersToRole> {
    const usersToRole = this.repository.findOne(id);
    if(usersToRole) {
      return usersToRole;
    }
    throw new HttpException('role affect not found', HttpStatus.NOT_FOUND);
  }
 // create
 public createRoleAffect(body: CreateRoletouserDto): Promise<UsersToRole> {
  const roleaffect: UsersToRole = new UsersToRole();
  roleaffect.users = body.Users;
  roleaffect.role = body.Role;

  return this.repository.save(roleaffect);
}
   async deleteUserToRole(id: number) {
    const deleteUserToRole = await this.repository.delete(id);
    if (!deleteUserToRole.affected) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
  }
}
