import { Injectable, NotFoundException } from '@nestjs/common';

import { faker } from '@faker-js/faker';
import { CreateBookDto, UpdateBookDto } from '../dtos/books.dto';
import { Book } from '../entities/book.entity';
import { AuthorsService } from 'src/authors/services/authors.service';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  constructor(private authorsService: AuthorsService) {
    for (let i = 0; i < 10; i++) {
      this.books.push({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        authorId: faker.string.uuid(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        createdAt: new Date(),
        updatedAt: new Date(),
        status: true,
      });
    }
  }

  findAll() {
    return this.books;
  }

  create(payload: CreateBookDto) {
    const book: Book = {
      id: faker.string.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload,
    };

    this.books.push(book);

    return book;
  }

  findOne(id: string) {
    const book = this.books.find((book) => book.id === id);
    if (!book)
      throw new NotFoundException(`Product with id ${id} wasn't found`);
    return book;
  }

  update(id: string, payload: UpdateBookDto) {
    const book = this.findOne(id);

    if (!book) return null;

    const index = this.books.findIndex((book) => book.id === id);
    this.books[index] = {
      ...book,
      ...payload,
    };

    return this.books[index];
  }

  remove(id: string) {
    const book = this.findOne(id);
    if (!book) return null;

    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) return null;

    this.books.splice(bookIndex, 1);
    return this.books[bookIndex];
  }

  getBooksByAuthor(authorId: string) {
    const author = this.authorsService.findOne(authorId);
    return {
      date: new Date(),
      author,
      books: this.findAll(),
    };
  }
}
