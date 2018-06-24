/**
 * @module Notifier
 */

import notifier from 'node-notifier';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';


@RpsModule("notifier")
export class RPSNotifier {

  @rpsAction({
    defaultName:'notifier',
    defaultParamPatterns:{
    title:/.*/
  }})
  notify (ctx:RpsContext,opts:{}, title:string, message?:string) : Promise<boolean>{
    notifier.notify({title:title,message: message? message : title});
    
    return Promise.resolve(true);
  }

}
