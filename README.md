<!--
 * @Author: hyy
 * @Date: 2020-12-22 10:15:40
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-20 11:21:39
-->
# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### 启动命令顺序

```bash
$ npm run tsc
$ npm run dev
如果端口被占用，查看端口进程并结束再启动
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### 搭建

1. 项目脚手架
   ```
   npm i egg-init -g
   egg-init egg-example --type=ts & cd egg-example
   npm i
   ```
2. 安装跨域模块
   ```
  npm i egg-cors --save-dev
   ```
   在config的plugin.js和config.default.js 中配置cors

3. 配置mongoose
