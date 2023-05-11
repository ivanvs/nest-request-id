import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export interface RequestIdConfig {
  header: string;
  idGenerator: () => string;
}

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  private header: string;
  private idGenerator: () => string;

  constructor(config: RequestIdConfig) {
    this.header = config.header || 'x-request-id';
    this.idGenerator = config.idGenerator || uuidv4;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const requestIdHeader = req.header(this.header) || this.idGenerator();

    req.headers[this.header] = requestIdHeader;
    res.set(this.header, requestIdHeader);
    next();
  }
}
