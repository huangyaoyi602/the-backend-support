/*
 * @Author: hyy
 * @Date: 2021-01-25 13:57:30
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-03 09:03:48
 */
import { Controller } from 'egg';

//封装公共方法
export default class BaseController extends Controller{
   success(message){
     this.ctx.body = {
       success:true,
       message
     }
   }

   notFound(msg='not found'){
     this.ctx.throw(404,msg)
   }

   fail(msg:string[]|string='fail'){
     this.ctx.body={
       success:false,
       msg
     }
   }
}

