//module是应用程序的一部分。一个module负责一件事，例如一个application负责身份验证，那将是用户module。
//appModule就像根模块（root module），在appModule将导入我们所做的一切。因为appModule是nestjs中用来构建应用程序的工具。

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
