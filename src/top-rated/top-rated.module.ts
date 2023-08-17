import { Module } from '@nestjs/common';
import { TopRatedService } from './top-rated.service';
import { TopRatedController } from './top-rated.controller';
import { LikeModule } from 'src/like/like.module';

@Module({
  providers: [TopRatedService],
  controllers: [TopRatedController],
  imports: [LikeModule],
})
export class TopRatedModule {}
