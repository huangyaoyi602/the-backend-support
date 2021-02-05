/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-25 15:59:15
 */
import  Controller  from './base_controller';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.status = 200
    const home = await ctx.service.test.sayHi('egg...');
    this.success(home)
  }
}
