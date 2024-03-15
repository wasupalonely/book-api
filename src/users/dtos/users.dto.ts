import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsDate()
  readonly birthDate: Date;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

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

export class UpdateUserDto extends PartialType(CreateUserDto) {}
