/* eslint-disable prettier/prettier */
import { Role } from 'src/role/entities/role.entity';
import { Users } from 'src/user/entities/user.entity';
import {CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UsersToRole {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Users, (users) => users.usersToRole)
  public users!: Users;

  @ManyToOne(() => Role, (role) => role.usersToRole)
  public role!: Role;
  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

}