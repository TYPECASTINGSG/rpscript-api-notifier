import notifier from 'node-notifier';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import {EventEmitter} from 'events';


/** Module for Node Notifier
 * @namespace Notifier
*/
@RpsModule("notifier")
export default class RPSNotifier {

  /**
 * @function notify
 * @memberof Notifier
 * @example
 * notify 'Title' 'Message'
 * 
 * @param {string} title Title
 * @param {string} message Option message
 * @returns {EventEmitter} 
 * @summary Notify popup
 * @description Notify popup
 * 
 * @see {@link https://www.npmjs.com/package/node-notifier}
 * 
*/
  @rpsAction({verbName:'notify'})
  async notify (ctx:RpsContext,opts:Object, title:string, message?:string) : Promise<EventEmitter>{

    let input = {title:title,message: message? message : title};

    if(opts['icon'])input['icon'] = opts['icon'];
    input['sound'] = opts['sound'];
    input['wait'] = opts['wait'];

    notifier.notify(input);

    return notifier;
  }

}
