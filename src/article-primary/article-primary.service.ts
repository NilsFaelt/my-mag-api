import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ArticlePrimaryType } from './types';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlePrimaryService {
  constructor(private readonly prismaService: PrismaService) {}
  public async get(authorId?: string) {
    const whereConditions = {
      deletedAt: null,
    };
    if (authorId) {
      whereConditions['authorId'] = authorId;
    }

    const [articles, totalCount] = await this.prismaService.$transaction([
      this.prismaService.articlePrimary.findMany({
        take: 4,
        include: {
          Like: {
            where: {
              deletedAt: null,
            },
          },
          author: true,
        },

        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prismaService.articlePrimary.count(),
    ]);
    return { articles, pagination: { totalCount } };
  }

  public async getById(id: string) {
    const article = await this.prismaService.articlePrimary.findUnique({
      where: {
        id: id,
      },
    });
    if (!article)
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    return article;
  }

  public async create(article: ArticlePrimaryType) {
    try {
      const articlePrimary = await this.prismaService.articlePrimary.create({
        data: article,
      });
      return articlePrimary;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          `Duplicate field. ${error.meta.target} already exists.`,
        );
      }

      throw new InternalServerErrorException('Error creating the article.');
    }
  }

  public async update() {
    console.log('hej');
  }
  public async delete(id: string) {
    try {
      const deletedArticle = await this.prismaService.articlePrimary.update({
        data: { deletedAt: new Date() },
        where: { id: id, deletedAt: null },
      });
      return { message: 'Article successfully deleted.', deletedArticle };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Article not found or already deleted.');
      }
    }
  }
}
