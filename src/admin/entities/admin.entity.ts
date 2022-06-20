/* eslint-disable prettier/prettier */
import { ProjetAff } from 'src/projet-affected/entities/projet-affected.entity';
import { Projet } from 'src/projet/entities/projet.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public nom?: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  password: string;
  
  // @ManyToMany(() => Users)
  // @JoinTable()
  //   users: Users[];
  @ManyToOne(() => ProjetAff)
  projectAff: ProjetAff
    
  @ManyToOne(() => Projet)
  Project: Projet;
}