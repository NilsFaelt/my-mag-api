import { Module } from '@nestjs/common';
import { ArticlePrimaryService } from './article-primary.service';
import { ArticlePrimaryController } from './article-primary.controller';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  providers: [ArticlePrimaryService],
  controllers: [ArticlePrimaryController],
  imports: [FirebaseModule],
})
export class ArticlePrimaryModule {}
