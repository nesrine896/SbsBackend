/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';
export class CreateAdminDto {
    @IsOptional()
    nom: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
}
