/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 13:13:32
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },//模版引擎
  cors:{
    enable:true,
    package:'egg-cors'
  },//跨域
  validate:{
    enable:true,
    package:'egg-validate'
  },//参数校验
  mysql:{
    enable:true,
    package:'egg-mysql'
  },//mysql
  jwt:{
    enable:true,
    package:'egg-jwt'
  }//jwt鉴权,在typings/index.d.ts中声明类型避免报错

};

export default plugin;
