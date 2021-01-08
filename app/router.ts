/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-22 11:06:19
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/home',controller.home.index)
  router.get('/next',controller.next.index)
};
