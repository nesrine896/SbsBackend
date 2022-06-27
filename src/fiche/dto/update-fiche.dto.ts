/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { TypdeTravail } from 'src/enum/Typedetravail';
import { CreateFicheDto } from './create-fiche.dto';

export class UpdateFicheDto extends PartialType(CreateFicheDto) {
    frais_transport?: string;
    date:Date;
    nbHeure: BigInteger;
    typetravail:TypdeTravail;
}
