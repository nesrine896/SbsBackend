/* eslint-disable prettier/prettier */
import { Fiche } from 'src/fiche/entities/fiche.entity';
import {ProjetAff } from 'src/projet-affected/entities/projet-affected.entity';
import { Role } from 'src/role/entities/role.entity';
import { RoleAffect } from 'src/roleaffect/entities/roleaffect.entity';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, ManyToMany, JoinTable} from 'typeorm';


@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public nom?: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @Column({type:'text'})
    imageProfil: string;


  @Column({type : 'date'})
  public brithday: Date;

  @Column({ type: 'varchar', length: 8 })
  public categorie: string;

  @Column({ type: 'varchar', length: 8 })
  public phone: string;

  @ManyToMany(() => Role)
  @JoinTable()
    rolesAffected: Role[];
  
  @ManyToOne(() => ProjetAff)
  projectAff: ProjetAff
   
  @ManyToOne(() => Fiche)
  fiche: Fiche;
  @ManyToOne(() => RoleAffect)
  roleAffect: RoleAffect;
}