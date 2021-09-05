/*
 * @Author: your name
 * @Date: 2021-09-04 21:11:34
 * @LastEditTime: 2021-09-04 22:49:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /recruitment-system-service/app/controller/home.js
 */
'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getUserByName() {
    const { ctx } = this;
    const {userName} = ctx.request.query;
    console.log('userName====>', userName);
    const res = await ctx.service.user.findByUsername(userName)
    ctx.body = res;
  }
}

module.exports = HomeController;
