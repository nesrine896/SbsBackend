/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column({ type: 'varchar', length: 120 })
  public type?: string;

}