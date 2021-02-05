/*
 * @Author: hyy
 * @Date: 2021-02-02 11:07:04
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-05 14:23:46
 */
import  Controller  from './base_controller';

class Login extends Controller{
  async verify(){
    
    const {ctx,app} = this
    const params = ctx.request.body
    console.log(params);
    
    const state =  await ctx.service.login.verify(params)
    
    if(state.type==='success'){
      const access_token = app.jwt.sign({
        name:params.name,
        id:params.password
      },app.config.jwt.secret,{
        expiresIn:'1m'
      })
      const refresh_token = app.jwt.sign({
        name:params.name
      },app.config.jwt.secret,{
        expiresIn:'2m'
      })

      this.success({access_token,refresh_token})

    }else{
      this.fail(state.msg)
    }
  }

  async index(){
    const {ctx}=this
    ctx.body = {code:200,msg:'验证成功'}
    
  }

  
}


module.exports = Login