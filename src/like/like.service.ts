import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private readonly prismaService: PrismaService) {}

  public async topLikedUsers() {
    console.log('add top liked user');
  }

  topLikedArticlesPrimary = async () => {
    const topLikedArticlesCounts =
      await this.prismaService.articlePrimaryLike.groupBy({
        by: ['postId'],
        _count: {
          postId: true,
        },
        where: {
          deletedAt: null,
        },
        orderBy: {
          _count: {
            postId: 'desc',
          },
        },
        take: 10,
      });

    const topPostIds = topLikedArticlesCounts.map((entry) => entry.postId);

    const articles = await this.prismaService.articlePrimary.findMany({
      where: {
        id: {
          in: topPostIds,
        },
      },
      select: {
        id: true,
        title: true,
        text: true,
        content: true,
        image: true,
      },
    });

    const enrichedArticles = await Promise.all(
      articles.map(async (article) => {
        const articleLikeCount = topLikedArticlesCounts.find(
          (count) => count.postId === article.id,
        )._count.postId;

        const recentLikesForArticle =
          await this.prismaService.articlePrimaryLike.findMany({
            where: {
              postId: article.id,
            },
            take: 1,
            orderBy: {
              createdAt: 'desc',
            },
          });

        return {
          ...article,
          totalLikes: articleLikeCount,
          recentLikes: recentLikesForArticle,
        };
      }),
    );

    return enrichedArticles;
  };
}
