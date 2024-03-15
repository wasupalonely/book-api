import { UserBaseEntity } from '../../common/valid-name/entities/userBase.entity';

export class Author extends UserBaseEntity {
  nationality: string;
  description: string;
}
