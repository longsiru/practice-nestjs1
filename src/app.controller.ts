//controller担任获取URL并运行函数。 controller类似一个router。

import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //在这里get 装饰器（decoritor），就像express的get router。
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  //装饰器（decoritor）必须附加到装饰它的函数function或者类class。 所以不要在装饰器和函数之间放空格。
  sayHello(): string {
    return 'hello everyone!';
  }
}
