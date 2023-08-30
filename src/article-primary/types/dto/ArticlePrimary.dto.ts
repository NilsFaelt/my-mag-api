import { IsNotEmpty, IsString, IsUUID, IsIn } from 'class-validator';
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
  @IsNotEmpty()
  @IsString()
  authorId: string;
  @IsIn(['travel', 'allaround', 'lifestyle', 'food'])
  @IsNotEmpty()
  category: 'travel' | 'allaround' | 'lifestyle' | 'food';
}
