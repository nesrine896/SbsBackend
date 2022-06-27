/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { UsersDTO } from '../security/auth/dto/users.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private repository: Repository<Users>,
  ) {}

  async getAllUsers(){
    return this.repository.find();
  }

  async getUserById(id: number): Promise<Users> {
    const users = this.repository.findOne(id);
    if(users) {
      return users;
    }
    throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }
// create
    public createUser(body: CreateUserDto): Promise<Users> {
      const user: Users = new Users();
      user.nom = body.nom;
      user.email = body.email;
      user.password = body.password;
      user.imageProfil = body.imageProfil;
      user.brithday = body.brithday;
      user.categorie = body.categorie;
      user.phone = body.phone;
  
      return this.repository.save(user);
  }
  //update
  async updateUser(id: number, user: UpdateUserDto) {
    await this.repository.update(id, user);
    const updatedUser = await this.repository.findOne(id);
    if (updatedUser) {
      return updatedUser;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
  //delete
  async deleteUser(id: number) {
    const deletedUser = await this.repository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
  }
}