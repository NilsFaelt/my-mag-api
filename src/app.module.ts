import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArticlePrimaryModule } from './article-primary/article-primary.module';
import { PrismaModule } from './prisma/prisma.module';
import { LikeModule } from './like/like.module';
import { TopRatedModule } from './top-rated/top-rated.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { AllowedUrlsMiddleware } from 'middlewares';
import { NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FirebaseModule } from './firebase/firebase.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlePrimaryModule,
    PrismaModule,
    LikeModule,
    TopRatedModule,
    UserModule,
    FirebaseModule,
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
