import { IsEmail, IsNotEmpty, IsString, isEmail } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty()
  googleUid: string;
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  userName: string;
}
