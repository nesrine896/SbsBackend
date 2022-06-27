/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetDto } from './create-projet.dto';

export class UpdateProjetDto extends PartialType(CreateProjetDto) {
    title: string;
    description: string;
    nomsociete: string;
}
