import { Generic } from '../../common/valid-name/entities/generic.entity';

export class Review extends Generic {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  comments?: string;
}
