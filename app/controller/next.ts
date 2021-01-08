/*
 * @Author: hyy
 * @Date: 2020-12-22 11:06:47
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-22 14:39:10
 */
import { Controller } from 'egg';

export default class NextController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = '持续更新中，敬请期待';
  }
}
