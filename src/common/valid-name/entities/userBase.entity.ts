export class UserBaseEntity {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
}
