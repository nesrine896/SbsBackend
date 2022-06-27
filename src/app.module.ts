/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { AuthModule } from './security/auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ProjetModule } from './projet/projet.module';
import { ProjetAffectedModule } from './projet-affected/projet-affected.module';
import { RoleModule } from './role/role.module';
import { FicheModule } from './fiche/fiche.module';
import { FactureModule } from './facture/facture.module';
import { TacheModule } from './tache/tache.module';
import { ClientModule } from './client/client.module';
import { RoletouserModule } from './roletouser/roletouser.module';



const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ 
      useClass: TypeOrmConfigService,
      inject: [ConfigService]
    }),
    AuthModule,
    AdminModule,
    UserModule,
    ProjetModule,
    ProjetAffectedModule,
    RoleModule,
    FicheModule,
    FactureModule,
    TacheModule,
    ClientModule,
    RoletouserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
