/* eslint-disable prettier/prettier */
import { IsOptional} from 'class-validator';
import { Role } from 'src/role/entities/role.entity';
import { Users } from 'src/user/entities/user.entity';
export class CreateRoletouserDto{
    @IsOptional()
    Users: Users;
    @IsOptional()
    Role: Role;
}
