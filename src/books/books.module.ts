import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BooksService } from './services/books.service';
import { CategoriesService } from './services/categories.service';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  controllers: [BooksController, CategoriesController],
  providers: [BooksService, CategoriesService],
  imports: [AuthorsModule],
})
export class BooksModule {}
