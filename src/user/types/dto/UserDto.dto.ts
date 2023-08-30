import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  userName: string;
}
