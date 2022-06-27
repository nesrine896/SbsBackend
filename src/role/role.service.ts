/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService{
  constructor(
    @InjectRepository(Role) private repository: Repository<Role>,
  ) {}

  async getAllRole(){
    return this.repository.find();
  }

  async getRoleById(id: number): Promise<Role> {
    const role = this.repository.findOne(id);
    if(role) {
      return role;
    }
    throw new HttpException('role not found', HttpStatus.NOT_FOUND);
  }
  // create
  public createUser(body: CreateRoleDto): Promise<Role> {
    const role: Role = new Role();
    role.type = body.type;
    return this.repository.save(role);
}

 //update
 async updateRole(id: number, role: UpdateRoleDto) {
  await this.repository.update(id, role);
  const updateRole = await this.repository.findOne(id);
  if (updateRole) {
    return updateRole;
  }

  throw new HttpException('User not found', HttpStatus.NOT_FOUND);
}

   //delete
   async deleteRole(id: number) {
    const deleteRole = await this.repository.delete(id);
    if (!deleteRole.affected) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
  }
}
