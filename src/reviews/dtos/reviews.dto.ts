import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  readonly bookId: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly rating: number;

  @IsString()
  readonly comments: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  @IsNotEmpty()
  @IsBoolean()
  readonly status: boolean = true;
}

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
