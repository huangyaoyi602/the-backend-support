/*
 * @Author: hyy
 * @Date: 2021-01-25 14:50:31
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-25 14:51:18
 */
import {Controller} from 'egg'

export default class CookieController extends Controller {
  async add() {
    const ctx = this.ctx;
    let count = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    ctx.cookies.set('count', ++count);
    ctx.body = count;
  }
  async remove() {
    const ctx = this.ctx;
    ctx.cookies.set('count', null);
    ctx.status = 204;
  }
}