import { Controller, Get, Injectable } from '@nestjs/common';
import { TopRatedService } from './top-rated.service';

@Injectable()
@Controller('top-rated')
export class TopRatedController {
  constructor(private readonly topRatedService: TopRatedService) {}
  @Get()
  public async get() {
    return this.topRatedService.get();
  }
}
