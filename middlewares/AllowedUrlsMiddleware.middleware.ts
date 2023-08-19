import { ForbiddenException, NestMiddleware } from '@nestjs/common';

export class AllowedUrlsMiddleware implements NestMiddleware {
  private allowedUrls = ['http://localhost:3001'];
  use(req: any, res: any, next: (error?: any) => void) {
    const origin = req.headers.origin;
    const referer = req.headers.referer;
    console.log(origin, referer);
    if (
      !this.allowedUrls.includes(origin) &&
      !this.allowedUrls.includes(referer)
    ) {
      throw new ForbiddenException('Access denied.');
    }

    next();
  }
}
