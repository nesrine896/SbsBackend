/* eslint-disable prettier/prettier */
import { IsOptional} from 'class-validator';
import { UserRole } from 'src/enum/UserRole';
export class CreateRoleDto {
    @IsOptional()
    type: UserRole;;
}
