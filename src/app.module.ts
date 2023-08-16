import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ArticlePrimaryModule } from './article-primary/article-primary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlePrimaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
