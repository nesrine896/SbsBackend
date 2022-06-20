/* eslint-disable prettier/prettier */
import { Body,
  Controller,
  Get,
  Inject, 
  Param,
  ParseIntPipe, 
  Post} from '@nestjs/common';

import { UsersDTO } from '../security/auth/dto/users.dto';
import { Users } from './entities/user.entity';

import { UserService } from './user.service';
@Controller('user')
export class UserController {
@Inject(UserService)
private readonly service: UserService;

@Get(':id')
public getUser(@Param('id', ParseIntPipe) id: number): Promise<Users> {
return this.service.getUser(id);
}
@Post()
public createUser(@Body() body: UsersDTO): Promise<Users> {
return this.service.createUser(body);
}
}
