import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'email required' })
  @IsEmail({}, { message: ' the email format is incorrect.' })
  email: string;

  @IsNotEmpty({ message: 'password required' })
  password: string;
}
