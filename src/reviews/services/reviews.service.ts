import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { CreateReviewDto, UpdateReviewDto } from '../dtos/reviews.dto';
import { Review } from '../entities/review.entity';

@Injectable()
export class ReviewsService {
  private reviews: Review[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.reviews.push({
        id: faker.string.uuid(),
        bookId: faker.string.uuid(),
        userId: faker.string.uuid(),
        rating: faker.number.int({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date(),
        comments: faker.word.words(),
        status: true,
      });
    }
  }

  findAll() {
    return this.reviews;
  }

  create(payload: CreateReviewDto) {
    const review: Review = {
      id: faker.string.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload,
    };

    this.reviews.push(review);

    return review;
  }

  findOne(id: string) {
    const review = this.reviews.find((review) => review.id === id);
    if (!review)
      throw new NotFoundException(`review with id ${id} wasn't found`);
    return review;
  }

  update(id: string, payload: UpdateReviewDto) {
    const review = this.findOne(id);

    if (!review) return null;

    const index = this.reviews.findIndex((review) => review.id === id);
    this.reviews[index] = {
      ...review,
      ...payload,
    };

    return this.reviews[index];
  }

  remove(id: string) {
    const review = this.findOne(id);
    if (!review) return null;

    const reviewIndex = this.reviews.findIndex((review) => review.id === id);

    if (reviewIndex === -1) return null;

    this.reviews.splice(reviewIndex, 1);
    return this.reviews[reviewIndex];
  }
}
