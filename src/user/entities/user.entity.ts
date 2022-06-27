/* eslint-disable prettier/prettier */
import { Fiche } from 'src/fiche/entities/fiche.entity';
import {ProjetAff } from 'src/projet-affected/entities/projet-affected.entity';
import { UsersToRole } from 'src/roletouser/entities/roletouser.entity';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 120 })
  public nom: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @Column({type:'text'})
    imageProfil: string;


  @Column({type : 'date'})
  public brithday: Date;

  @Column({ type: 'varchar', length: 120 })
  categorie: string;

  @Column({ type: 'varchar', length: 8 })
  public phone: string;

  @ManyToOne(() => ProjetAff)
  projectAff: ProjetAff
   
  @ManyToOne(() => Fiche)
  fiche: Fiche;
  
  @OneToMany(() => UsersToRole, (usersToRole) => usersToRole.role)
  usersToRole!: UsersToRole[];


}

function OnDelete(arg0: any) {
  throw new Error('Function not implemented.');
}
