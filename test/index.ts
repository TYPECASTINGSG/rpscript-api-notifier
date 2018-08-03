import * as c from 'chai';
import m from 'mocha';

import RPSNotifier from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Notifier', () => {

  m.it('should pop up hello world notification', async function () {
    let notifier = new RPSNotifier;
    await notifier.notify(new RpsContext,{subtitle:'subtitle',message:'messge world'},"hello");

    let t:any = await notifier.notify(new RpsContext,{subtitle:'subtitle',message:'messge world'});
    t('title here');
  });

})
