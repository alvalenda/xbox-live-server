import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  MinLength,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Fulano da Silva',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'fulano@email.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Your password must be strong',
  })
  @ApiProperty({
    description:
      'Senha deve ter no mínimo 8 caracteres, um número e uma letra maiúscula',
    example: 'Abcd*1234',
  })
  password: string;

  @IsString()
  @MaxLength(11)
  @Matches(
    /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})*$/,
    {
      message: 'Seu CPF deve ser uma string e conter 11 números',
    },
  )
  @ApiProperty({
    description: 'O CPF do usuário',
    example: '12345678901',
  })
  CPF: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Usuário é administrador?',
    example: false,
  })
  isAdmin: boolean;
}

// DTO: Data Transfer Object
