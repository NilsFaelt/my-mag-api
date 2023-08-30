import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
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
  @IsString()
  @IsOptional()
  aboutMe: string;
}
