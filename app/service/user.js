/*
 * @Author: your name
 * @Date: 2021-09-04 21:28:30
 * @LastEditTime: 2021-09-04 21:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /recruitment-system-service/app/service/user.js
 */
"use strict";

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 创建用户
   * @param {Object} user 用户信息
   * @return {Object} 用户信息
   */
  async create(user) {
    console.log(this.ctx.model);
    return await this.ctx.model.User.create(user);
  }

  /**
   * 通过用户名查找用户
   * @param {String} username 用户名
   * @return {Object} user 用户信息
   */
  async findByUsername(username) {
    console.log('%c⧭', 'color: #00a3cc', this.ctx.model);
    const user = await this.ctx.model.User.findOne({
      where: { username },
    });
    return user;
  }

  /**
   * 通过id查找用户
   * @param {Int} id 用户id
   * @return {Object} user 用户信息
   */
  async findById(id) {
    const { ctx } = this;
    const user = await ctx.model.User.findOne({
      where: { id },
    });
    if (!user) {
      this.ctx.throw(404, "user not found");
    }
    return user;
  }

  /**
   * 更新用户信息
   * @param {Object} values 更新信息
   * @param {Int} id 用户id
   * @return {Object} 更新结果
   */
  async update(id, values) {
    const user = await this.ctx.service.user.findById(id);
    if (!user) {
      this.ctx.throw(404, "user not found");
    }
    delete values.id;
    return user.update(values);
  }

  /**
   * 通过id删除用户
   * @param {Int} id 用户id
   * @return {String} 结果
   */
  async deleteById(id) {
    const user = await this.ctx.model.User.destroy({ where: { id } });
    if (!user) {
      this.ctx.throw(404, "没有此用户");
    } else if (user) {
      return "用户删除成功";
    } else {
      return "请联系管理员！";
    }
  }
}

module.exports = UserService;
