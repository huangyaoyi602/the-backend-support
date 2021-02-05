/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-29 09:02:50
 */
import { Service } from 'egg';
// import { mkdirSync } from 'fs';
const fs = require('fs')
const path = require('path')
// const awaitWriteStream = require('await-stream-ready').write
// const sendToWormhole = require('stream-wormhole')




/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  //读取数据
  public getData() {
    console.log('开始拿数据');
    
    const filename = 'datafile.json'
    const datapath = path.resolve(__dirname, './data/test')
    const target = path.join(datapath, filename)

    const data = fs.readFileSync(target)

    const userList = JSON.parse(data)
      console.log('拿到数据',userList);
      
      return userList
    }

  

  //写入数据
  public async setDate(json_data) {
    console.log('开始搞事');

    // const {ctx} = this
    const set_data_path = path.resolve(__dirname, './data/test')
    // //获取流
    // const stream = await ctx.getFileStream()
    //生成文件夹、文件名
    const filename = `datafile.json`
    //生成文件路径
    const target = path.join(set_data_path, filename)

    //读取文件
    const data = fs.readFileSync(target)

    const list = JSON.parse(data)
    json_data.cretime = Date.now()
    list.push(JSON.stringify(json_data))
    fs.writeFileSync(target,JSON.stringify(list,null,'\t'))

    return true

    // try{
    //   await awaitWriteStream(stream.pipe(writeStream))
    // }catch(err){
    //   await sendToWormhole(stream)
    //   throw err
    // }
  }


}
