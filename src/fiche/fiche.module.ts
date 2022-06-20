import { Module } from '@nestjs/common';
import { FicheService } from './fiche.service';
import { FicheController } from './fiche.controller';

@Module({
  controllers: [FicheController],
  providers: [FicheService]
})
export class FicheModule {}
