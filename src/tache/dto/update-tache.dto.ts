/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { UserRole } from 'src/enum/UserRole';
import { CreateTacheDto } from './create-tache.dto';

export class UpdateTacheDto extends PartialType(CreateTacheDto) {
    tachR?: UserRole;
    isUrgent: boolean;
}
