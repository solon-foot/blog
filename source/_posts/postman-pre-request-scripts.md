title: postman 使用我知道的
date: 2019-06-19 16:30:16
tags: postman
---
postman是个接口调试利器
支持api调试，作为api文档，
实现自动填充参数，参数签名等

<!-- more -->
### 使用Pre-request Script & Tests 处理登录token，请求参数签名等
##### 举个例子-获取登录token存储到全局变量
```javascript
if(responseBody.code===200){
    let rdata = JSON.parse(responseBody);
    pm.globals.set("token", rdata.token);
}
```

##### 举个例子-参数签名

所有的请求要求满足以下要求
1. 必须传参数`v`版本号
2. 必须传请求`token`
3. 必须传时间戳`t`
4. 必须传签名参数`s`,签名规则，str=所有参数按照ASCII码升序排列;salt = 固定盐;uri=url.pathname;s = md5(uri+str+salt)
```javascript

let salt = "固定盐";


if(request.method !== "POST")return;
let uri = request.url.substring(8);//根据具体情况编写
let v = pm.environment.get("v")||"1.0.0"//版本号配置在环境变量中
let t = Math.round(new Date().getTime() / 1000);//生成时间戳
let s = "";
let token = pm.globals.get("token");//将token放在全局变量中
if(!token){
    token = ""
    pm.globals.set("token",token);处理token为undefined的情况
}



let rdata = request.data;
rdata.token = token;
rdata.t = t;
rdata.v = v;

let sign = Object.keys(rdata).filter(t=>t!="s").sort().map(key=>key + "="+rdata[key]).join("&");
s=CryptoJS.MD5(uri + sign + salt).toString()
pm.variables.set("v", v);
pm.variables.set("t", t);
pm.variables.set("s", s);
```
参数配置参考
![图片](/assets/postman/postman-sp.png)

##### 如何给单个接口或Collections设置
1. 给单个接口设置，点击接口下面的`Pre-request Script`
2. 给整个集合设置，点击`Collections`的`...`选择`Edit`,弹出框中选择`Pre-request Script`
3. 优先级，Collections高于单个接口的设置

##### 脚本编写技巧
1. 使用`Ctrl + Shift + I`打开调试面板
2. `console.log(this)`查看支持的方法，建议查看官方文档
3. 区别使用环境变量/全局变量/局部变量

