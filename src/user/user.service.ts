/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDTO } from '../security/auth/dto/users.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(Users)
  private readonly repository: Repository<Users>;

  public getUser(id: number): Promise<Users> {
    return this.repository.findOne(id);
  }

  public createUser(body: UsersDTO): Promise<Users> {
    const user: Users = new Users();
    user.nom = body.nom;
    user.email = body.email;
    user.password = body.password;
    user.imageProfil = body.imageProfil;
    user.brithday = body.brithday;

    return this.repository.save(user);
  }
}
