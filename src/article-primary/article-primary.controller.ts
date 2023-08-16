import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ArticlePrimaryService } from './article-primary.service';
import { ArticlePrimaryDto } from './types';

@Controller('article-primary')
export class ArticlePrimaryController {
  constructor(private readonly articlePrimaryService: ArticlePrimaryService) {}
  @Get()
  public async get() {
    return this.articlePrimaryService.get();
  }
  @Get(':id')
  public async getById() {
    return this.articlePrimaryService.get();
  }
  @Post()
  public async post(@Body() articlePrimary: ArticlePrimaryDto) {
    console.log(articlePrimary);
    return this.articlePrimaryService.get();
  }
  @Patch(':id')
  public async update() {
    return this.articlePrimaryService.get();
  }
  @Delete(':id')
  public async delete() {
    return this.articlePrimaryService.get();
  }
}
