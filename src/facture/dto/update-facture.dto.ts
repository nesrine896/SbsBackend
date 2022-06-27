/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { FactureMode } from 'src/enum/factureMode';
import { CreateFactureDto } from './create-facture.dto';

export class UpdateFactureDto extends PartialType(CreateFactureDto) {
    modefacture?: FactureMode;
    prix:string;
}
