/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Fiche {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public frais_transport?: string;

  @Column({ type: 'date' })
  public date: Date;

  @Column({ type: 'integer'})
  nbheure: BigInteger;


  @Column({ type: 'varchar' })
  public typetravail: string;
}