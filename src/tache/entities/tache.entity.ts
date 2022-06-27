/* eslint-disable prettier/prettier */
import { UserRole } from 'src/enum/UserRole';
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class Tache {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public tacheR?: UserRole;

  @Column()
  public isUrgent?: boolean;
}