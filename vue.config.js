/*
 * @Author: your name
 * @Date: 2020-03-09 10:35:20
 * @LastEditTime: 2020-03-28 15:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhimutong_company_backstage/vue.config.js
 */

const path = require("path");
// eslint-disable-next-line no-unused-vars
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  publicPath: "./",
  productionSourceMap: false,
  outputDir: "docs"
  // assetsDir: "./"
};
