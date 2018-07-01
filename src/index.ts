/**
 * @module Notifier
 */

import notifier from 'node-notifier';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';


@RpsModule("notifier")
export default class RPSNotifier {

  @rpsAction({defaultName:'notifier'})
  notify (ctx:RpsContext,opts:{}, title:string, message?:string) : Promise<boolean>{
    notifier.notify({title:title,message: message? message : title});
    
    return Promise.resolve(true);
  }

}
