import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
export class ArticlePrimaryDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  text;
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsString()
  image: string;
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  authorId: string;
}
