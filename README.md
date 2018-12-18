<div align="center">
  <a href="https://nicelinks.site?from=github">
    <img width="200" height="200" src="https://raw.githubusercontent.com/TheHumanComedy/appreciate-poetry-quickapp/master/src/assets/images/logo.png" alt="Appreciate Poetry Quickapp">
  </a>
</div>

<h1 align="center">Appreciate Poetry Quickapp</h1>

<div align="center">
  🌊 一款精致用于欣赏古诗文的<strong><a href="https://nicelinks.site/post/5b5fb5bc615bf842b609105f">快应用</a></strong>
</div>

<br>

<div align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E=%206.0.0-green.svg" alt="node version">
  </a>
  <a href="https://github.com/TheHumanComedy/appreciate-poetry-quickapp">
    <img src="https://img.shields.io/github/license/TheHumanComedy/appreciate-poetry-quickapp.svg" alt="LICENSE">
  </a>
  <a href="https://github.com/TheHumanComedy/appreciate-poetry-quickapp"><img src="https://img.shields.io/badge/Author-梅林横纵客-%23a696c8.svg" alt="Author"></a>
</div>

<div align="center">
  <image src="https://raw.githubusercontent.com/TheHumanComedy/appreciate-poetry-quickapp/master/src/assets/images/qrcode.png" width="300" alt="倾城之链" />
  <p>您可使用<code><a href="https://github.com/nicejade/awesome-quickapp#调试器下载">快应用调试器</a></code>扫如上二维码，即可在手机端体验。</p>
</div>

## 组织结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── debug           # 调试环境证书/私钥文件
│   └── release         # 正式环境证书/私钥文件
└── src
│   ├── assets          # 公用的资源(images/styles/字体...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   ├──js           # 存储公共 javaScript 代码资源
│   │   └──styles       # 存放 less/css/sass 等公共样式资源
│   ├── helper          # 项目自定义辅助各类工具
│   │   ├──apis         # 存储与后台请求接口相关(已封装好)
│   │   ├──ajax.js      # 对系统提供的 fetch api 进行链式封装
│   │   └──utils        # 存放项目所封装的工具类方法
│   ├── pages           # 统一存放项目页面级代码
│   ├── app.ux          # 应用程序代码的人口文件
│   └── manifest.json   # 配置快应用基本信息
└── package.json        # 定义项目需要的各种模块及配置信息
```

## 如何开始

```bash
git clone https://github.com/TheHumanComedy/appreciate-poetry-quickapp.git
cd appreciate-poetry-quickapp && yarn
yarn start # 推荐 ✅✅

# 或者运行以下命令
yarn server & yarn watch

# 或者在终端一 Tab 下运行：
yarn server
# 在终端另一 Tab 下运行：
yarn watch
```
用一台 `Android` 手机，下载安装[「快应用」调试器](https://github.com/nicejade/awesome-quickapp#调试器下载)，打开后操作`扫码安装`，扫描如上命令生成的二维码，即可看到效果；更多讯息，请参见[快应用环境搭建](https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html#环境搭建)。

## 代码提交

此仓库推荐使用 [gitmoji](https://github.com/carloscuesta/gitmoji) ( is an initiative to standardize and explain **the use of emojis on GitHub commit messages.**) 工具，来辅助写出规范的 `commit message`。

```bash
# 安装
npm i -g gitmoji-cli

# 使用
gitmoji -i
git add .
git commit
```

## 许可执照

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, [梅林横纵客](https://github.com/TheHumanComedy)
