title: Android 常用依赖
date: 2019-01-07 18:05:40
tags: android
---
>
一下仅为个人习惯使用的库，方便在GitHub中检索，罗列出来


* [web socket](https://github.com/TooTallNate/Java-WebSocket)
* [json 解析](https://github.com/google/gson)
* [butterknife](https://github.com/JakeWharton/butterknife)
* [ijkplayer](https://github.com/Bilibili/ijkplayer)
* [eventbus](https://github.com/greenrobot/EventBus)
* [RxJava](https://github.com/ReactiveX/RxJava) [RxAndroid](https://github.com/ReactiveX/RxAndroid) [RxPermission](https://github.com/tbruyelle/RxPermissions)
* [http 网络请求](https://github.com/square/retrofit)
``` java
            new Retrofit.Builder()
            .baseUrl(AppConst.BASE_URL)
            .client(client)
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(RxJava2CallAdapterFactory.create())//支持rxjava

            .build().create(ApiService.class);
```


