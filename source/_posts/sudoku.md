title: sudoku
date: 2018-06-08 17:00:43
tags:
---
数独都是浮云，秒解任意数独题目
<!--more-->
<script src="/sudoku/js/shudu.js"></script>
<script src="/sudoku/js/utils.js"></script>
<style >
html {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
body {
line-height: 1.6;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
* {
margin: 0;
padding: 0;
}
a img {
border: 0;
}
a {
text-decoration: none;
}
</style>
<div onload="main()" sroll="no">
<div style="text-align: center">
<canvas id="canvas"></canvas>
<div style="display: none"><img id="img" src="shudu.png" width="300px"height="300px"></div>
<br/>
<!--<button onclick="qiujie()">选择一个游戏</button>-->
<button id="custom" onclick="create(this)">自定义游戏</button>
<button onclick="qiujie(this)">自动求解</button>
<select id="select" onchange="choose(this)">
</select>
</div>
### 数独求解
[玩法移步百科](http://baike.baidu.com/subview/961/10842669.htm)
1. 支持自定义题目。
<2. 直接使用当前页面来解题的设计不是很友好，期待后面优化处理。
考虑添加
<p>解题辅助 显示，使用当前页面解题更友好
<p>计划支持，不是唯一解得情况，在终端显示所有解。<a href="https://github.com/solon-foot/other">详情查看 GitHub</a>
<script src="/sudoku/js/controller.js" charset="UTF-8"></script>
</div>
