/*
 * @Author: hyy
 * @Date: 2021-02-03 09:18:24
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 09:46:10
 */
import { Service } from 'egg';
const fs = require('fs')
const path = require('path')

export default class Login extends Service {

  public verify(params){

    //检测用户名密码
    const userpath = path.resolve(__dirname,'./data/user')
    const filename = 'user.json'
    const target = path.join(userpath,filename)
    const users = fs.readFileSync(target)
    const usersdata = JSON.parse(users)
    const detection = usersdata.filter(item=>{
      return item.name===params.name
    })[0]

    if(!detection){
      return {
        type:'fail',
        msg:'用户名不存在'
      }
    }

    console.log(params.password,detection.pwd);
    

    if(params.password!==detection.pwd){
      return {
        type:'fail',
        msg:'密码错误'
      }
    }

    return {
      type:'success',
      msg:'登录成功'
    }





  //   //读取session数据
  //   const sessionpath = path.resolve(__dirname,'./data/user')
  //   const sessionfilename = 'session.json'
  //   const sessiontarget = path.join(sessionpath,sessionfilename)
  //   const sessions = fs.readFileSync(sessiontarget)
  //   const sessionsdata = JSON.parse(sessions)

    

  //   //写入新用户
   




  //   fs.writeFileSync(target,JSON.stringify(sessionsdata,null,'\t'))
  // if(sessionsdata[params.name]){

  //   }

  //   return {
  //     type:'success',
  //     result:'创建成功'
  //   }
  }
}