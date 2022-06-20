import { Injectable } from '@nestjs/common';
import { CreateRoleaffectDto } from './dto/create-roleaffect.dto';
import { UpdateRoleaffectDto } from './dto/update-roleaffect.dto';

@Injectable()
export class RoleaffectService {
  create(createRoleaffectDto: CreateRoleaffectDto) {
    return 'This action adds a new roleaffect';
  }

  findAll() {
    return `This action returns all roleaffect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleaffect`;
  }

  update(id: number, updateRoleaffectDto: UpdateRoleaffectDto) {
    return `This action updates a #${id} roleaffect`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleaffect`;
  }
}
