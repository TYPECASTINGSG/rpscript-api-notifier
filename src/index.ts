import notifier from 'node-notifier';
import {RpsContext,RpsModule,rpsAction,R} from 'rpscript-interface';
import {EventEmitter} from 'events';


/** Module for Node Notifier
 * @see {@link https://www.npmjs.com/package/node-notifier}
 * @namespace Notifier
 * 
 * @example
 * rps install notifier
 * 
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
 * @param {string} message message
 * @param {*} options  refer to node-notifier documentation.
 * @returns {EventEmitter} 
 * @summary notify :: String → String → EventEmitter
 * 
 * 
 * 
*/
  @rpsAction({verbName:'notify'})
  async notify (ctx:RpsContext,opts:Object, ...params:string[]) : Promise<EventEmitter|Function>{
    let fn = R.curry(function noti (title,message) {
      if(title)opts['title'] = title;
      if(message)opts['message'] = message;

      notifier.notify(opts);

      return notifier;
    });

    return R.apply(fn,params);
  }

}
