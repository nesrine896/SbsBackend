/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: number;
    nom: string;
    email: string; 
    password: string;
    imageProfil: string;
    brithday: Date;
    categorie: string;
    phone: string

}
