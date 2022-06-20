/* eslint-disable prettier/prettier */
import { Users } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn,ManyToOne, Column} from 'typeorm';



@Entity()
export class RoleAffect {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public role: string;

  @ManyToOne(() => Users,{primary: true})
  users: Users;
}