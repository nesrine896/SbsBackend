/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Facture } from './facture.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public title?: string;

  @Column({ type: 'varchar', length: 120 })
  public description: string;

  @Column({ type: 'varchar', length: 120 })
  nomsociete: string;
  
  @ManyToOne(() => Facture)
  facture: Facture;
}