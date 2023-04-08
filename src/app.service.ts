//我们先进入了main，从main进入module，从module进入controller，在进入service，然后我们可以看到是谁在更改文本。
//service基于class，class 有功能，
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
}
