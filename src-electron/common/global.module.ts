import {Global, Module} from '@nestjs/common';

const Store = require('electron-store');

@Global()
@Module({
  providers: [{
    provide: Store,
    useFactory: () => new Store(),
  }, {
    provide: 'AppRoot',
    useValue: process.cwd(),
  }],
  exports: [Store],
})
export default class GlobalModule{}
