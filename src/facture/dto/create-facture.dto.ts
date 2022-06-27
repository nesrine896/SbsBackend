/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";
import { FactureMode } from "src/enum/factureMode";

export class CreateFactureDto {
    @IsOptional()
    modefacture: FactureMode;
    @IsString()
    prix: string;
}
