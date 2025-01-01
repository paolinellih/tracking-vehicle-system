import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIsNestJsRunning(): string {
    return 'NestJs is running...';
  }
}
