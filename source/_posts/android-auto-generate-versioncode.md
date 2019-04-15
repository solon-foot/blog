title: android-auto-generate-versioncode
date: 2019-04-04 15:52:14
tags: android
---

android versionCode 自动生成的几种思路

1. [根据当前日期](#1)
2. [根据git提交次数或svn等版本控制软件等](#2)
3. [频繁打包情况下处理](#3)
4. [多人模式下处理](#4)

<!--more-->
### 根据当前日期

```groovy
ext {
    compileSdkVersion = 27
    buildToolsVersion = "27.0.3"
    targetSdkVersion = 22

    appVersionName = new Date().format("'V'yy.MM.dd")
    appVersionCode = new Date().format("yyMMdd").toInteger()

}
```

### 根据版本控制生成版本号
```groovy
def getVersionCode () {
    try {
        def stdout = new ByteArrayOutputStream()
        exec {
            //此处可以根据实际情况使用git rev-list --all --count
            commandLine 'git', 'rev-list', '--all', '--count'
//            commandLine 'svnversion'
            standardOutput = stdout
        }
        return Integer.parseInt(stdout.toString().trim())
    }
    catch (ignored) {
        println "===================error code!"
        return -1
    }
}

```

### 一天多次打包处理方案

```groovy
def getVersionCode(projectName) {
    def versionCodeFile = file('versions.properties')
    def versionCode
    def date
    Properties properties = new Properties()

    if (!versionCodeFile.canRead()) {
        versionCodeFile.createNewFile()
    }
        properties.load(new FileInputStream(versionCodeFile))
        versionCode = properties[projectName + '_VERSION_CODE']//读取version_code.properties文件存放的版本号。
        date = properties[projectName + '_VERSION_DATE']

        if (date == null) {
            date=0
//            properties[projectName + '_VERSION_DATE'] = date.toString()
//            properties.store(versionCodeFile.newWriter(), null)
        }
        else date = date.toInteger()
        if (versionCode == null) {
            versionCode = 0
//            properties[projectName + '_VERSION_CODE'] = (versionCode).toString()
//            properties.store(versionCodeFile.newWriter(), null)
        }
        else versionCode = versionCode.toInteger()


    def today = new Date().format("yyMMdd").toInteger()
    if (today > date) {
        versionCode = 0
    }
    return ["properties": properties, "versionCode": versionCode, "date": today,"versionCodeFile":versionCodeFile]
}

def generateVersionCode(projectName) {
def a = getVersionCode(projectName)
    def versionCode = a.versionCode
    def date = a.date
    def runTasks = gradle.startParameter.taskNames
    def task = ":${projectName}:assembleRelease".toString()
    if (task in runTasks) {
        a.properties[projectName + '_VERSION_CODE'] = (versionCode + 1).toString()
        a.properties[projectName + '_VERSION_DATE'] = date.toString()
        println("================")
        a.properties.store(a.versionCodeFile.newWriter(), null)
    }

    return date * 100 + versionCode
}

def generateVersionName(projectName) {
    return new Date().format("'V'yy.MM.dd.") + getVersionCode(projectName).versionCode
}
```

### 具体调用方式
```groovy
defaultConfig {
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode rootProject.generateVersionCode(project.name)
        versionName rootProject.ext.appVersionName
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
```