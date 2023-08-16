import { Injectable } from '@nestjs/common';
import { ArticlePrimaryType } from './types';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlePrimaryService {
  constructor(private readonly prismaService: PrismaService) {}
  public async get() {
    const articles = this.prismaService.articlePrimary.findMany({
      where: {
        deletedAt: null,
      },
    });
    return articles;
  }
  public async getById() {
    console.log('hej');
  }
  public async post(article: ArticlePrimaryType) {
    const articlePrimary = await this.prismaService.articlePrimary.create({
      data: article,
    });
    console.log(articlePrimary, 'creaed');
    return articlePrimary;
  }
  public async update() {
    console.log('hej');
  }
  public async delete() {
    console.log('hej');
  }
}
