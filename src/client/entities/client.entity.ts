/* eslint-disable prettier/prettier */
import { ProjetAff } from 'src/projet-affected/entities/projet-affected.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';



@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public codeClient?: string;
  @Column({ type: 'varchar', length: 120 })
  public nomClient?: string;
  
  @ManyToOne(() => ProjetAff)
  projectAff: ProjetAff
}