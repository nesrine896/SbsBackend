/* eslint-disable prettier/prettier */
import { UserRole } from 'src/enum/UserRole';
import { UsersToRole } from 'src/roletouser/entities/roletouser.entity';
import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column({ type: 'varchar', length: 120 })
  public type?: UserRole;

  @OneToMany(() => UsersToRole, (usersToRole) => usersToRole.users)
  public usersToRole!: UsersToRole[];
}


