/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private repository: Repository<Admin>,
  ) {}

  async getAllAdmin(){
    return this.repository.find();
  }


  async getAdminById(id: number): Promise<Admin> {
    const admin = this.repository.findOne(id);
    if(admin) {
      return admin;
    }
    throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
  }

  public createAdmin(body: CreateAdminDto): Promise<Admin> {
    const admin: Admin = new Admin();
    admin.nom = body.nom;
    admin.email = body.email;
    admin.password = body.password;

    return this.repository.save(admin);
}

async updateAdmin(id: number, admin: UpdateAdminDto) {
  await this.repository.update(id, admin);
  const updatedAdmin = await this.repository.findOne(id);
  if (updatedAdmin) {
    return updatedAdmin;
  }

  throw new HttpException('admin not found', HttpStatus.NOT_FOUND);
}
async deleteAdmin(id: number) {
  const deletedAdmin = await this.repository.delete(id);
  if (!deletedAdmin.affected) {
    throw new HttpException('Admin not found', HttpStatus.NOT_FOUND);
  }
}
}
