/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Fiche } from './fiche.entity';
import { ProjectAff } from './projectAffec.entity';
import { Role } from './role.entity';


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
  public categories: string;

  @Column({ type: 'varchar', length: 8 })
  public phone: string;

  @ManyToMany(() => Role)
  @JoinTable()
    rolesAffected: Role[];
  
  @ManyToOne(() => ProjectAff)
  projectAff: ProjectAff
   
  @ManyToOne(() => Fiche)
  fiche: Fiche;
}