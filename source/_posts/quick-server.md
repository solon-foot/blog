title: 快速启本地server+内网转发
date: 2019-03-19 09:49:35
tags:
---

快速创建server通过nodejs/python等创建一个server
内网转发-[ngrok](https://ngrok.com/)
<!--more-->

### nodejs
安装
```
npm init
npm install http-server 
```
修改package.json
```json
"scripts": {
     "start": "http-server -a 0.0.0.0 -p 8000",
 }
```
<strong>参数</strong>

```
	
-p 端口号 (默认 8080)

-a IP 地址 (默认 0.0.0.0)

-d 显示目录列表 (默认 'True')

-i 显示 autoIndex (默认 'True')

-e or --ext 如果没有提供默认的文件扩展名(默认 'html')

-s or --silent 禁止日志信息输出

--cors 启用 CORS via the Access-Control-Allow-Origin header

-o 在开始服务后打开浏览器
-c 为 cache-control max-age header 设置Cache time(秒) , e.g. -c10 for 10 seconds (defaults to '3600'). 禁用 caching, 则使用 -c-1.
-U 或 --utc 使用UTC time 格式化log消息

-P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

-S or --ssl 启用 https

-C or --cert ssl cert 文件路径 (default: cert.pem)

-K or --key Path to ssl key file (default: key.pem).

-r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')

-h or --help 打印以上列表并退出
```

### Python

```
python -m SimpleHTTPServer 8000
```

### ngrok

配置文档参考[官网](https://ngrok.com/docs)
简单参考配置

```yml

authtoken: 4nq9771bPxe8ctg7LKr_2ClH7Y15Zqe4bWLWF9p
region: ap
console_ui: true
inspect_db_size: 50000000
log_level: info
log_format: json
log: /var/log/ngrok.log
metadata: '{"serial": "00012xa-33rUtz9", "comment": "For customer alan@example.com"}'
root_cas: trusted

update: false
update_channel: stable
web_addr: localhost:4040
tunnels:
  website:
    addr: 8000
    auth: bob:bobpassword
    bind_tls: true
    host_header: "myapp.dev"
    inspect: false
    proto: http
    

```
启动

```ngrok start website```

返回
```
Account                       Zack (Plan: Free)
Version                       2.3.18
Region                        Asia Pacific (ap)
Web Interface                 http://localhost:4040
Forwarding                    https://eaf1a758.ap.ngrok.io -> http://localhost:8000
```
