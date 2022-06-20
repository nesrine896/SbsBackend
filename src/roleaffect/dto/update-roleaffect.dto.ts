import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleaffectDto } from './create-roleaffect.dto';

export class UpdateRoleaffectDto extends PartialType(CreateRoleaffectDto) {}
