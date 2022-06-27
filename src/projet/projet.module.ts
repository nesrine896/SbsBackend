/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { ProjetController } from './projet.controller';
import { Projet } from './entities/projet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Projet])],
  controllers: [ProjetController],
  providers: [ProjetService]
})
export class ProjetModule {}
