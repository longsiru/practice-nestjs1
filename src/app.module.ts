//module是应用程序的一部分。一个module负责一件事，例如一个application负责身份验证，那将是用户module。

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
