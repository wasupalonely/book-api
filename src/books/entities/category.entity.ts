import { Generic } from '../../common/valid-name/entities/generic.entity';

export class Category extends Generic {
  id: string;
  name: string;
  description: string;
  image: string;
}
