import { Module } from '@nestjs/common';
import { ArticlePrimaryService } from './article-primary.service';
import { ArticlePrimaryController } from './article-primary.controller';

@Module({
  providers: [ArticlePrimaryService],
  controllers: [ArticlePrimaryController],
})
export class ArticlePrimaryModule {}
