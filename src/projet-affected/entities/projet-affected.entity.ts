/* eslint-disable prettier/prettier */
import { Tache } from 'src/tache/entities/tache.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ProjetAff {
  @PrimaryGeneratedColumn()
  public id!: number;
  

  @ManyToOne(() => Tache)
  tache: Tache
}