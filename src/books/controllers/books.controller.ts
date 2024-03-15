import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from 'src/books/services/books.service';
import { CreateBookDto, UpdateBookDto } from '../dtos/books.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
    this.booksService = booksService;
  }

  @Get(':id')
  // @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') bookId: string) {
    return this.booksService.findOne(bookId);
  }

  @Get(':authorId')
  getBooksByAuthor(@Param('authorId') authorId: string) {
    return this.booksService.getBooksByAuthor(authorId);
  }

  @Get('')
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return this.booksService.findAll();
  }

  @Post('')
  create(@Body() payload: CreateBookDto) {
    return this.booksService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateBookDto) {
    return this.booksService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
