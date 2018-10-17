#! /usr/bin/env node
// 加载目录默认加载的js，本是index.js，json定成了main.js
var helloFun = require('./hello');
helloFun.sayHello("aa");
//helloFun("aa");

//require('./readFile');
require('./myHttps');
