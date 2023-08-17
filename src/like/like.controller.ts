import { Controller, Get } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}
  @Get()
  public async get() {
    return this.likeService.get({ articlePrimary: true });
  }
}
