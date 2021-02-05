/*
 * @Author: hyy
 * @Date: 2021-02-02 11:06:50
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-03 09:03:41
 */
import  Controller  from './base_controller';

class Register extends Controller{
  async index(){
    const {ctx} = this
    const params = ctx.request.body
    const state =  await ctx.service.register.index(params)
    console.log(state);
    
    if(state.type==='success'){
      this.success(state.result)
    }else{
      this.fail(state.result)
    }
    
  }
}


module.exports = Register