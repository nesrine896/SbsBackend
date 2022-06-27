/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { Facture } from './entities/facture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Facture])],
  controllers: [FactureController],
  providers: [FactureService]
})
export class FactureModule {}
