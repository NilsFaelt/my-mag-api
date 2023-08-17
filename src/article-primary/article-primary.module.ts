import { Module } from '@nestjs/common';
import { ArticlePrimaryService } from './article-primary.service';
import { ArticlePrimaryController } from './article-primary.controller';
import { LikeModule } from 'src/like/like.module';

@Module({
  providers: [ArticlePrimaryService],
  controllers: [ArticlePrimaryController],
  imports: [LikeModule],
})
export class ArticlePrimaryModule {}
