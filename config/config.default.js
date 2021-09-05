/*
 * @Author: your name
 * @Date: 2021-09-04 21:11:34
 * @LastEditTime: 2021-09-05 21:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /recruitment-system-service/config/config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // mysql: {
    //   // 单数据库信息配置
    //   client: {
    //     // host
    //     host: 'localhost',
    //     // 端口号
    //     port: '3306',
    //     // 用户名
    //     user: 'root',
    //     // 密码
    //     password: 'root',
    //     // 数据库名
    //     database: 'mysql',
    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // },
    // sequelize: {
    //   // 数据库类型
    //   dialect: "mysql",
    //   // host
    //   host: "127.0.0.1",
    //   // 端口号
    //   port: "3306",
    //   // 用户名
    //   username: "root",
    //   // 密码
    //   password: "root",
    //   // 数据库名
    //   database: "mysql",
    //   // 保存为本地时区
    //   timezone: "+08:00",
    //   // 查询时间
    //   dialectOptions: {
    //     dateStrings: true,
    //     typeCast(field, next) {
    //       // for reading from database
    //       if (field.type === "DATETIME") {
    //         return field.string();
    //       }
    //       return next();
    //     },
    //   },
    // },
  
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630761030414_1639';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
