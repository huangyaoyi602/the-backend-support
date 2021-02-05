/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-03 09:01:04
 */
import { Service } from 'egg';
const fs = require('fs')
const path = require('path')

export default class Register extends Service {

  public index(params){
    let result:string[] = []
    //检测注册数据格式是否符合规范
    console.log('params',params);
    const {name,firstpwd,secondpwd} = params
    if(!name ||  !/^[A-Za-z_@.]{6,10}$/.test(name))
      result.push('用户名格式不正确')
    if(!firstpwd || !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(firstpwd))
      result.push('密码格式不正确')
    if(secondpwd !== firstpwd)
      result.push('两次输入的密码不一致')
    if(result.length){
      return {
      type:'error',
      result
    }
    }
    

    //检测用户名是否重复
    const userpath = path.resolve(__dirname,'./data/user')
    const filename = 'user.json'
    const target = path.join(userpath,filename)
    const users = fs.readFileSync(target)
    const usersdata = JSON.parse(users)
    const detection = usersdata.some(item=>{
      return item.name===name
    })
    if(detection) return {
      type:'error',
      result:'用户名已存在'
    }

    //写入新用户
    const userId = Date.now()

    let user = {
      name,
      pwd:firstpwd,
      userId
    }
    usersdata.push(user)
    fs.writeFileSync(target,JSON.stringify(usersdata,null,'\t'))
    return {
      type:'success',
      result:'创建成功'
    }
  }
}
