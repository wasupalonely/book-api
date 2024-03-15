import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly authorId: string;

  @IsString()
  @IsUrl()
  readonly image: string;

  @IsBoolean()
  readonly status: boolean = true;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
