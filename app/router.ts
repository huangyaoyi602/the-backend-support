/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 13:56:50
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router} = app;

  //独享中间件
  const gzip =app.middleware.gzip({threshold:1024})
  const jwt = app.middleware.jwt(app.config.jwt)
  

  router.get('/', controller.home.index);
  router.get('/home',controller.home.index)
  router.get('/next',controller.next.page)
  router.get('/test/get',gzip, controller.test.get)
  router.post('/test/set',controller.test.set)
  router.post('/register',controller.register.index)
  router.post('/login',controller.login.verify)
  router.get('/test/user', jwt ,controller.login.index)
};
