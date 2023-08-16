import { Test, TestingModule } from '@nestjs/testing';
import { ArticlePrimaryService } from './article-primary.service';

describe('ArticlePrimaryService', () => {
  let service: ArticlePrimaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlePrimaryService],
    }).compile();

    service = module.get<ArticlePrimaryService>(ArticlePrimaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
