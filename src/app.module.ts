import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArticlePrimaryModule } from './article-primary/article-primary.module';
import { PrismaModule } from './prisma/prisma.module';
import { LikeModule } from './like/like.module';
import { TopRatedModule } from './top-rated/top-rated.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { AllowedUrlsMiddleware } from 'middlewares';
import { NestModule } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlePrimaryModule,
    PrismaModule,
    LikeModule,
    TopRatedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*'); // Apply to all routes
  }
}

//TODO
// Add to middlewrae consumer after dev is done
// AllowedUrlsMiddleware
