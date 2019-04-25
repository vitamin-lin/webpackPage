## 设计稿
  增加px2rem，以及rem.js文件（以750设计稿为准）
  使用时引入rem.js，设计稿多少px，css就写多少px，自动转换为rem

## 环境介绍
    webpack4 + scss + jquery
  # 目录
    1.build => webpack一些配置
      详情参考：https://juejin.im/post/5b9116086fb9a05d05307e96
    2.src => assets
      里面可以放一些公用方法，图片，样式
    3.src => pages
      index.html index.js index.scss

## 项目的开发流程
  1. git clone https://github.com/vitamin-lin/webpackPage.git
  2. npm install 安装开发环境依赖包
  3. npm run dev 开启本地开发环境
  4. npm run build build 项目上线时打包压缩前端