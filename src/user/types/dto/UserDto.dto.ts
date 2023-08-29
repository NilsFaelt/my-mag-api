import { IsNotEmpty, IsString } from 'class-validator';
export class UserDto {
  @IsString()
  id: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  userName: string;
}
