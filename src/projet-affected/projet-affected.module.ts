import { Module } from '@nestjs/common';
import { ProjetAffectedService } from './projet-affected.service';
import { ProjetAffectedController } from './projet-affected.controller';

@Module({
  controllers: [ProjetAffectedController],
  providers: [ProjetAffectedService]
})
export class ProjetAffectedModule {}
