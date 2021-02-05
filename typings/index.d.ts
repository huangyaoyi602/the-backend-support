/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 13:12:40
 */
import 'egg';

declare module 'egg' {
  interface Application {
    jwt: any
    mysql: any
  }
}