import { Generic } from '../../common/valid-name/entities/generic.entity';

export class Book extends Generic {
  id: string;
  title: string;
  authorId: string;
  description: string;
  image: string;
  // category: string;
}
