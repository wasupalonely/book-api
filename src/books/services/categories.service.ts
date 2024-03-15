import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        description: faker.commerce.productDescription(),
        createdAt: new Date(),
        updatedAt: new Date(),
        name: faker.commerce.productName(),
        image: faker.image.url(),
        status: true,
      });
    }
  }

  findAll() {
    return this.categories;
  }

  create(payload: CreateCategoryDto) {
    const book: Category = {
      id: faker.string.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload,
    };

    this.categories.push(book);

    return book;
  }

  findOne(id: string) {
    const category = this.categories.find((category) => category.id === id);
    if (!category)
      throw new NotFoundException(`Category with id ${id} wasn't found`);
    return category;
  }

  update(id: string, payload: UpdateCategoryDto) {
    const category = this.findOne(id);

    if (!category) return null;

    const index = this.categories.findIndex((category) => category.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };

    return this.categories[index];
  }

  remove(id: string) {
    const category = this.findOne(id);
    if (!category) return null;

    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );

    if (categoryIndex === -1) return null;

    this.categories.splice(categoryIndex, 1);
    return this.categories[categoryIndex];
  }
}
