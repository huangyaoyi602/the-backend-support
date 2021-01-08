/*
 * @Author: hyy
 * @Date: 2020-12-22 11:09:10
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-22 11:17:48
 */
import { Service } from 'egg';

export default class WaitNew extends Service {


  public async waitNew(msg: string) {
    return `... ${msg}`;
  }
}