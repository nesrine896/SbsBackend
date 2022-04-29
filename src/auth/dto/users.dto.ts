/* eslint-disable prettier/prettier */
import {IsDateString, IsString } from 'class-validator';

export class UsersDTO {
  @IsString()
  nom: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsDateString()
  brithday: Date;
  @IsString()
  post: string;  
  @IsString()
  imageProfil: string; 
}