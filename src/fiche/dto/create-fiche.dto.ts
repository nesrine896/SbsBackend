/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";
import { TypdeTravail } from "src/enum/Typedetravail";

export class CreateFicheDto {
    @IsOptional()
    @IsString()
    frais_transport: string;
    @IsOptional()
    @IsString()
    date: Date;
    @IsOptional()
    nbheure: BigInteger;
    @IsOptional()
    @IsString()
    typetravail: TypdeTravail;
}
