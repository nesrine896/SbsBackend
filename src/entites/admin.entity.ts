/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Project } from './project.entity';
import { ProjectAff } from './projectAffec.entity';

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
  @ManyToOne(() => ProjectAff)
  projectAff: ProjectAff
    
  @ManyToOne(() => Project)
  Project: Project;
}