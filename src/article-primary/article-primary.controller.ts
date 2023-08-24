import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ArticlePrimaryService } from './article-primary.service';
import { ArticlePrimaryDto } from './types';
import { AuthGuard } from 'guards';

@Controller('article-primary')
export class ArticlePrimaryController {
  constructor(private readonly articlePrimaryService: ArticlePrimaryService) {}
  // @UseGuards(AuthGuard)
  @Get()
  public async get(@Query('authorId') authorId: string) {
    console.log(authorId);
    return this.articlePrimaryService.get(authorId);
  }
  @Get(':id')
  public async getById(@Param('id') id: string) {
    return this.articlePrimaryService.getById(id);
  }
  @Post()
  public async create(@Body() articlePrimary: ArticlePrimaryDto) {
    console.log(articlePrimary, ' in controelrr');
    return this.articlePrimaryService.create(articlePrimary);
  }
  @Patch(':id')
  public async update() {
    return this.articlePrimaryService.get();
  }
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    console.log(id, 'test');
    return this.articlePrimaryService.delete(id);
  }
}

//add auth
