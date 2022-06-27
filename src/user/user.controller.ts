/* eslint-disable prettier/prettier */
import { Body,
  Controller,
  Delete,
  Get,
  Inject, 
  Param, 
  Post,
  Put} from '@nestjs/common';
// import { JwtAuthGuard } from 'src/security/auth/jwt-auth.guard';

// import { UsersDTO } from '../security/auth/dto/users.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { Users } from './entities/user.entity';

import { UserService } from './user.service';
@Controller('user')
export class UserController {
@Inject(UserService)
private readonly service: UserService;
// @UseGuards(JwtAuthGuard)

//get all
@Get()
getUsers() {
  return this.service.getAllUsers();
}
//get by id
@Get(':id')
getUserById(@Param('id') id: string) {
  return this.service.getUserById(Number(id));
}
//create user
@Post()
async createUser(@Body() user: CreateUserDto) {
  return this.service.createUser(user);
}
 // update user
 @Put(':id')
 async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
   return this.service.updateUser(Number(id), user);
 }
 //delete user
 @Delete(':id')
 async deleteUser(@Param('id') id: string) {
   this.service.deleteUser(Number(id));
 }
}
