/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { validate } from 'class-validator';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from '../auth/logger/logger.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private jwtService: JwtService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async login(user: any): Promise<Record<string, any>> {
    // Validation Flag
    let  isOk = false;
    try {
    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO .nom = user.nom;
    userDTO.email = user.email;
    userDTO.password = user.password;
      await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
      });
    console.log(isOk);
    console.log(userDTO);
    if (isOk) {
      // Get user information
      const userDetails = await this.usersRepository.findOne({
        email: user.email,
      });
      if (userDetails == null) {
        return { status: 401, msg: { msg: 'email not found' } };
      }
      // Check if the given password match with saved password
      const isValid = bcrypt.compareSync(user.password, userDetails.password);
      console.log(user.password);
      console.log(userDetails.password);
      if (isValid) {
       
          const token = jwt.sign(user.email, process.env.PUBLIC_KEY);
              
        return {
          status: 200,
          msg: {
            email: user.email,
            access_token: token,
          },
        };
      } else {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    } else {
      return { status: 400, msg: { msg: 'Invalid fields.' } };
    }
  }catch(error){console.log(error)};
  }
  async createUser(body: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO.nom = body.nom;
    userDTO.email = body.email;
    userDTO.brithday = body.brithday;
    userDTO.post = body.post;
    userDTO.imageProfil = body.imageProfil;
    userDTO.password = bcrypt.hashSync(body.password, 10);

    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
    });
    console.log(isOk);
    console.log(userDTO)
    if (isOk) {
      await this.usersRepository.save(userDTO).catch((error) => {
        this.logger.debug(error.message, AuthService.name);
        isOk = false;
      });
      if (isOk) {
        return { status: 200, content: { msg: `User created with success` } };
      } else {
        return { status: 400, content: { msg: 'User already exists' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }
}
