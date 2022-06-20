/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class Facture {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public modefacture?: string;

  @Column({ type: 'varchar', length: 120 })
  public prix: string;
}