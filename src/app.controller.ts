//controller担任获取URL并返回函数，返回的函数是service里面的函数。 controller类似一个router。

import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //在这里get 装饰器（decoritor），就像express的get router。
  getHello(): string {
    return this.appService.getHello();
    //这里用到了service，下面我们没有用也出来了页面，所以为什么需要service呢？  结构和构架。  //nest.js喜欢将控制器controller和业务逻辑分开，controller只负责获取url，其他的业务逻辑都交给service。service通常是实际具有功能的部分。
  }

  @Get('/hello')
  //装饰器（decoritor）必须附加到装饰它的函数function或者类class。 所以不要在装饰器和函数之间放空格。
  sayHello(): string {
    return this.appService.getHi();
  }

  //当我们用post的时候，页面会出现404错误。
  // @Post('/hellopost')
  // sayHello1(): string {
  //   return 'hello everyone!';
  // }
}
