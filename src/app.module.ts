import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ArticlePrimaryModule } from './article-primary/article-primary.module';
import { PrismaModule } from './prisma/prisma.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlePrimaryModule,
    PrismaModule,
    LikeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
