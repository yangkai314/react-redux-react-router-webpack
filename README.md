#react-es6-webpack

##使用说明

> 开发时的环境

- Windows 10
- Node v6.10.0
- NPM v3.10.10

> 快速开始

```
$ npm install                   #国内请使用淘宝镜像cnpm安装
$ npm start                     #启动程序并开启热替换
$ npm start:express             #使用express启动程序并编译源代码产至dist目录
$ npm run release               #编译源代码产至dist目录
$ npm run release:w             #监听文件变化自动编译源代码产至dist目录
```

> 技术栈
```
webpack+es6+react+sass
```

> 目录结构说明
```
├──config                       #webpack配置
├──server                       #server代码
├──dist                         #项目产出目录
├──src                          #项目源代码
    ├──componets                #全局可复用公共组件
    ├──css                      #公共css
    ├──pages                    #页面
        ├──page1                #单个页面，命名可根据实际开发命名
        ...
    ├──redux                    #redux
    ├──index.html               #项目入口html
    ├──index.js                 #项目入口js
```

> 2017.3.8
```
第一次提交
持续更新，后续会添加react-touter,redux
```

> 2017.3.10
```
更新web-dev-server启动地址为 localhost:8000
加入了react-router初级应用
```

> 2017.3.11
```
因localhost:8000只能使用localhost:8000或者127.0.0.1:8000访问app，
更新web-dev-server启动地址为 0.0.0.0:8000，这样也能使用本地ip来访问app(如192.106.0.108)
```

> 2017.3.15
```
添加图片处理,小于8k的图片会处理成为base64，大于8k的会产至/dist/img目录下,
添加css，js压缩功能
```

> 2017.3.17
```
添加express启动程序，配置后端路由统一指向/dist/index.html,其他事情交由react-router来完成，
运行npm run start:express
```

> 2017.3.20
```
添加babel-plugin-transform-class-properties包，解决使用es6初始化props时webpack无法编译的问题
添加react-router-scroll包，解决react-router切换路由是滚动条保持在原位的问题
```

> 2017.3.21
```
添加redux管理数据.新增一个counter的状态管理的小例子
```

> 2017.3.28
```
新增命令 release:w（自动打包）
```
