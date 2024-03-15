import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsDate()
  readonly birthDate: Date;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly nationality: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  @IsNotEmpty()
  @IsBoolean()
  readonly status: boolean;

  @IsString()
  @IsUrl()
  readonly photoUrl: string;
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
