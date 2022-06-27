/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Role } from 'src/role/entities/role.entity';
import { Users } from 'src/user/entities/user.entity';
import { CreateRoletouserDto } from './create-roletouser.dto';

export class UpdateRoletouserDto extends PartialType(CreateRoletouserDto) {
    Users: Users;
    Role: Role;
}
