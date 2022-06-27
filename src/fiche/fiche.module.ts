/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FicheService } from './fiche.service';
import { FicheController } from './fiche.controller';
import { Fiche } from './entities/fiche.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Fiche])],
  controllers: [FicheController],
  providers: [FicheService]
})
export class FicheModule {}
