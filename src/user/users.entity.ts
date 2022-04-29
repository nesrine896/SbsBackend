/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

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
  public post: string;

  @Column({ type: 'varchar', length: 8 })
  public phone: string;

  // @Column({ type: 'boolean', default: false })
  // public isDeleted: boolean;

  // /*
  //  * Create and Update Date Columns
  //  */

  // @CreateDateColumn({ type: 'timestamp' })
  // public createdAt!: Date;

  // @UpdateDateColumn({ type: 'timestamp' })
  // public updatedAt!: Date;
}