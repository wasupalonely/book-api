import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Author } from '../entities/author.entity';
import { CreateAuthorDto, UpdateAuthorDto } from '../dtos/authors.dto';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.authors.push({
        id: faker.string.uuid(),
        birthDate: new Date(),
        description: faker.person.bio(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        nationality: faker.location.country(),
        photoUrl: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
        status: true,
      });
    }
  }

  findAll() {
    return this.authors;
  }

  create(payload: CreateAuthorDto) {
    const author: Author = {
      id: faker.string.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload,
    };

    this.authors.push(author);

    return author;
  }

  findOne(id: string): Author {
    const author = this.authors.find((author) => author.id === id);
    if (!author)
      throw new NotFoundException(`Author with id ${id} wasn't found`);
    return author;
  }

  update(id: string, payload: UpdateAuthorDto) {
    const author = this.findOne(id);

    if (!author) return null;

    const index = this.authors.findIndex((author) => author.id === id);
    this.authors[index] = {
      ...author,
      ...payload,
    };

    return this.authors[index];
  }

  remove(id: string) {
    const author = this.findOne(id);
    if (!author) return null;

    const authorIndex = this.authors.findIndex((author) => author.id === id);

    if (authorIndex === -1) return null;

    this.authors.splice(authorIndex, 1);
    return this.authors[authorIndex];
  }
}
