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
 * @summary date-of :: (String, String?) -> EventEmitter
 * 
 * @description Notification
 * 
 * @see {@link https://www.npmjs.com/package/node-notifier}
 * 
 * 
*/
  @rpsAction({verbName:'notify'})
  async notify (ctx:RpsContext,opts:Object, title?:string, message?:string) : Promise<EventEmitter|Function>{

    function noti (title,message) {
      if(title)opts['title'] = title;
      if(message)opts['message'] = message;

      notifier.notify(opts);

      return notifier;
    }

    if(title) return noti(title,message);
    else return noti;
  }

}
