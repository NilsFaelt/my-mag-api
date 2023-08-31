import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const CurrentUser = createParamDecorator(
  (data: 'user_id', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];

    try {
      const decodedToken = jwt.decode(token);
      console.log(decodedToken);
      return data ? decodedToken[data] : decodedToken;
    } catch (err) {
      console.log('Couldnt find user', err);
      return null;
    }
  },
);
