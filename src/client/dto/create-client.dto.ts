/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";

export class CreateClientDto {
    @IsOptional()
    @IsString()
    codeClient: string;
    @IsOptional()
    @IsString()
    nomClient: string;
}
