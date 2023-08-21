import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { expressjwt } from 'express-jwt';
import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa';
import { promisify } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;
  constructor(private readonly configService: ConfigService) {
    this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE');
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN');
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.getArgByIndex(0);
    const response = context.getArgByIndex(1);

    const checkJwt = promisify(
      expressjwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }) as GetVerificationKey,
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256'],
      }),
    );
    try {
      await checkJwt(request, response);

      return true;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
