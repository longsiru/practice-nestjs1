//我们先进入了main，从main进入module，从module进入controller，在进入service，然后我们可以看到是谁在更改文本。
//service基于class，class 有功能，
import { Injectable } from '@nestjs/common';

//在service这里可以看到另一个class，其中包含简单的gethell函数。
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  getHi(): string {
    return 'hello everyone!';
  }
}
