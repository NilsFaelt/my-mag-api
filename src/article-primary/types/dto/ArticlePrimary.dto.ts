import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class ArticlePrimaryDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsString()
  image: string;
  @IsNotEmpty()
  @IsString()
  author: string;
  @IsNotEmpty()
  @IsNumber()
  authorId: number;
}
