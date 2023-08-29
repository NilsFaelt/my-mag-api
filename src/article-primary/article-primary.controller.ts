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
import { FirebaseAuthGuard } from 'guards';
import { FirebaseService } from 'src/firebase/firebase.service';

@Controller('article-primary')
export class ArticlePrimaryController {
  constructor(
    private readonly articlePrimaryService: ArticlePrimaryService,
    private readonly fireBaseService: FirebaseService,
  ) {}

  @Get()
  public async get(@Query('authorId') authorId: string) {
    return this.articlePrimaryService.get(authorId);
  }
  @Get(':id')
  public async getById(@Param('id') id: string) {
    return this.articlePrimaryService.getById(id);
  }
  @UseGuards(FirebaseAuthGuard)
  @Post()
  public async create(@Body() articlePrimary: ArticlePrimaryDto) {
    return this.articlePrimaryService.create(articlePrimary);
  }
  @UseGuards(FirebaseAuthGuard)
  @Patch(':id')
  public async update() {
    return this.articlePrimaryService.get();
  }
  @UseGuards(FirebaseAuthGuard)
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    console.log(id, 'test');
    return this.articlePrimaryService.delete(id);
  }
}
