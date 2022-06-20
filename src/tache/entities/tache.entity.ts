/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class Tache {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public tacheR?: string;

  @Column()
  public isUrgent?: boolean;
}