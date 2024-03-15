import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsUrl()
  readonly image: string;

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

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
