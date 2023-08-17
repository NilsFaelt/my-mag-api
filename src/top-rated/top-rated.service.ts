import { Injectable } from '@nestjs/common';
import { LikeService } from 'src/like/like.service';

@Injectable()
export class TopRatedService {
  constructor(private readonly likeService: LikeService) {}
  public async get() {
    const topRatedArticles = await this.likeService.get('articlePrimary');
    console.log(topRatedArticles);
  }
}
