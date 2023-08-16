import { Module } from '@nestjs/common';
import { ArticlePrimaryService } from './article-primary.service';
import { ArticlePrimaryController } from './article-primary.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ArticlePrimaryService],
  controllers: [ArticlePrimaryController],
})
export class ArticlePrimaryModule {}
