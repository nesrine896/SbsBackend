/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';
export class CreateProjetDto {
    @IsOptional()
    title: string;
    @IsString()
    description: string;
    @IsString()
    nomsociete: string;
}
