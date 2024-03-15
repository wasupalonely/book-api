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
import { ReviewsService } from '../services/reviews.service';
import { CreateReviewDto, UpdateReviewDto } from '../dtos/reviews.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('reviews')
@ApiTags('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {
    this.reviewsService = reviewsService;
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  @Get('')
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return this.reviewsService.findAll();
  }

  @Post('')
  create(@Body() payload: CreateReviewDto) {
    return this.reviewsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateReviewDto) {
    return this.reviewsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
