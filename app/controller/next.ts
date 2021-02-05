/*
 * @Author: hyy
 * @Date: 2020-12-22 11:06:47
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-27 13:14:38
 */
import  Controller  from './base_controller';

class NextController extends Controller{
  async index(){
    this.ctx.body  = {
      name:'next',
      category:'framework',
      language:'Node.js'
    }
  } 
  async page(){
    this.ctx.body = '<html><h1>持续开发中。。。</h1></html>'
  }
}

module.exports = NextController