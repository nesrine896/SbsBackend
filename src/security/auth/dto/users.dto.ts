/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class UsersDTO {
  @IsString()
  @IsOptional()
  nom: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  @IsOptional()
  brithday: Date;
  @IsString()
  @IsOptional()
  imageProfil: string; 
  @IsString()
  @IsOptional()
  categorie: string;
  @IsString()
  @IsOptional()
  phone: string;
}