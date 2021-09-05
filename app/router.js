/*
 * @Author: your name
 * @Date: 2021-09-04 21:11:34
 * @LastEditTime: 2021-09-04 21:32:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /recruitment-system-service/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getUserByName.json', controller.home.getUserByName);
};
