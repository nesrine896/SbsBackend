/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { ProjectAff } from './projectAffec.entity';


@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public codeClient?: string;
  
  @ManyToOne(() => ProjectAff)
  projectAff: ProjectAff
}