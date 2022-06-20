import { Users } from 'src/user/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}
