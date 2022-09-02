import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;
    if(authHeaders) {
      next();
    } else {
      throw new UnauthorizedException
    }
  }
}
