/*
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-20 14:08:25
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.robot = {
    ua:[
      /Baiduspider/i
    ]
  }

  return config;
};
