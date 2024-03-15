import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { faker } from '@faker-js/faker';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(private configService: ConfigService) {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
        photoUrl: faker.image.avatar(),
        status: true,
      });
    }
  }

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const data = this.configService.get('DATABASE_NAME');
    console.log(`DATAAA -> ${apiKey} ${data}`);
    return this.users;
  }

  create(payload: CreateUserDto) {
    const book: User = {
      id: faker.string.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload,
    };

    this.users.push(book);

    return book;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`user with id ${id} wasn't found`);
    return user;
  }

  update(id: string, payload: UpdateUserDto) {
    const user = this.findOne(id);

    if (!user) return null;

    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };

    return this.users[index];
  }

  remove(id: string) {
    const user = this.findOne(id);
    if (!user) return null;

    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) return null;

    this.users.splice(userIndex, 1);
    return this.users[userIndex];
  }
}
