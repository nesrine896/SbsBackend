/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Tache } from './taches.entity';


@Entity()
export class ProjectAff {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(() => Tache)
  tache: Tache
}