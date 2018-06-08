title: android studio 配置参考
date: 2018-06-08 12:01:01
tags:
 - Android
 - config
 - Android studio
---

> Android studio 个人常用快捷键配置，代码格式化风格等配置

<!--more-->

### studio 常用快键键
 |个人使用的快捷键|Keymap 描述|备注|
 |:-----------:|:---------------------|:-------|
 |`Alt + ↑/↓`| `Main menu｜Code｜Move Statement Up/Down`|上下移动当前行
 |`Ctrl + O` |`Main menu｜Navigate｜File Structure`|查看当前类所有方法
 |`Ctrl + E` |`Main menu｜View｜Recent Files`|查看最近打开文件
 |`Alt + Shift + R` |`Main menu｜Refactor｜Rename...`|重命名
 |`Ctrl + N` |`Main menu｜Code｜Generate...`|自动生成代码
 |`Ctrl + D` |`Editor Actions｜Delete Line`|删除当前行
 |`Ctrl + Alt + ↓` |`Editor Actions｜Duplicate Entire Lines`|复制当前行
 |`Shift + Enter` |`Editor Actions｜Start New Line`|开始一个新行
 |`Ctrl + Shift + Enter` |`Editor Actions｜Start New Line Before Current`|当前行之前建立新行
 |`Tab/Shift + Tab`||代码缩进
 |`Ctrl + 1` |`Other｜Show Intention`|快速修复
 |`Alt + /` |`Other｜Class Name Completion`|代码自动补全
 |`Ctrl + .` |`Main menu｜navigate｜Highlighted Error`<br/>快速定位错误位置（与搜狗输入法切换全/半角冲突，目前没找到关闭方法）|快速定位错误
|`Ctrl + T`| | 
|`F4`| |查看类继承结构
|double `Shift`|| 快速查找
|`Ctrl + G`|| 查找方法在哪里被调用过，`Ctrl + Shift + G` 只在当前文件查找

> 以上快捷键保留eclipse的使用习惯，可根据个人随意更改
> 修改方式 : windows `Files->Settings...｜Keymap`注：为保留mac的使用习惯，快捷键改为了`Ctrl + ,`
> 以上的配置完成后，建议导出备份

### Code Style 修改
* 使用[GoogleStyle](https://github.com/google/styleguide)，导入方法`Editor->Code Style->Java` 选择设置 `import scheme...`
* 修改`Tabs and Indents` 中 `Tab size`、`Indent`、`Continuation indent` 值为4
* 公司团队应使用同一套规范
