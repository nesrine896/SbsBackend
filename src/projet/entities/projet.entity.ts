/* eslint-disable prettier/prettier */
import { Facture } from 'src/facture/entities/facture.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';


@Entity()
export class Projet {
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