import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from '../dtos/authors.dto';
import { AuthorsService } from '../services/authors.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {
    this.authorsService = authorsService;
  }

  @Get(':bookId')
  @ApiOperation({ summary: 'Return an author by id' })
  getOne(@Param('productId') productId: string) {
    return this.authorsService.findOne(productId);
  }

  @Get('')
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return this.authorsService.findAll();
  }

  @Post('')
  create(@Body() payload: CreateAuthorDto) {
    return this.authorsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateAuthorDto) {
    return this.authorsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.authorsService.remove(id);
  }
}
