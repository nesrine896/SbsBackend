import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetAffectedDto } from './create-projet-affected.dto';

export class UpdateProjetAffectedDto extends PartialType(CreateProjetAffectedDto) {}
