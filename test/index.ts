import * as c from 'chai';
import m from 'mocha';

import {RPSNotifier} from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Notifier', () => {

  m.it('should pop up hello world notification', async function () {
    RPSNotifier.Notify(new RpsContext,{},"hello","world");
  });

})
