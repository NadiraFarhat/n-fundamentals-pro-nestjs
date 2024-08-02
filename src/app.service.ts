import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/Provider/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: {port: string},
  ) {}
  getHello(): string {
    return `Hello I am learning NESTJS Fundamentals ${this.devConfigService.getDBHOST()} PORT = ${this.config.port}`;
  }
}
