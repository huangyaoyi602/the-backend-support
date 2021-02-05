/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 10:23:53
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608603317963_8308';

  // add your egg config in here

  
  config.jwt = {secret:'12345'}


  //模版插件
  config.view = {
    defaultViewEngine:'nunjucks',
    mapping:{
      '.tpl':'nunjucks'
    }
  }

  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.cluster = {
    listen: {
      path:'',
      port: 9090,
      hostname:'0.0.0.0'
    }
  }

  config.news = {
    pageSize : 5,
    serverUrl:'http://hacker-news.firebaseio.com/v0'
  }

  //添加中间件
  config.middleware = ['robot','gzip']

  //配置中间件 start
  config.robot = {
    ua:[
      /curl/i,
      /Baiduspider/i
    ]
  }

  config.gzip = {
    threshold:1024, //开启压缩的响应体下限
    match:'/static'
  }

  //配置中间件 end

  //配置cookie
  config.cookies = {
    httpOnly:true, //不能被js访问
    signed:false, //签名,可以被修改
    sameSize:'lax',
    encrypt:true,//加密传输
    maxAge: 1000*60*60*24*7,
    path:'/', //所有路径都生效

  }

  //配置session
    config.session = {
      maxAge:1000*60*60*24,
      renew:true, //延长有效期
      key:'count'
    }

    //csrf token
    config.security={
      csrf:{
        headerName:'x-csrf-token',
        ignoreJSON:true
      }
    }



  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };



  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
