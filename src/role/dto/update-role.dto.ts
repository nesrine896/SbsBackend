import { PartialType } from '@nestjs/mapped-types';
import { UserRole } from 'src/enum/UserRole';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  type?: UserRole;
}
