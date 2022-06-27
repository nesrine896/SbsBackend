/* eslint-disable prettier/prettier */
import { FactureMode } from 'src/enum/factureMode';
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class Facture {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public modefacture?: FactureMode;

  @Column({ type: 'varchar', length: 120 })
  public prix: string;
}