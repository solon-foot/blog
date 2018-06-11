title: 数独求解
date: 2018-06-08 17:00:43
description: 数独 求解 工具 在线
tags:
 - 游戏
categories:
 - 工具

---

数独都是浮云，秒解任意数独题目
<!--more-->
<script src="/sudoku/js/shudu.js"></script>
<script src="/sudoku/js/utils.js"></script>
<script src="/sudoku/js/controller.js" charset="UTF-8"></script>
<div style="text-align: center" id="canvas_parent">
<canvas id="canvas"></canvas>
<button id="custom" onclick="create(this)" >自定义游戏</button>
<button onclick="qiujie(this)">自动求解</button>
<select id="select" onchange="choose(this)">
</select>
</div>


### 数独求解
[玩法移步百科](http://baike.baidu.com/subview/961/10842669.htm)
1. 支持自定义题目。
2. 直接使用当前页面来解题的设计不是很友好，期待后面优化处理。
> 考虑添加 解题辅助 显示，使用当前页面解题更友好
计划支持，不是唯一解得情况，在终端显示所有解。[详情查看 GitHub](https://github.com/solon-foot/other)
> markdown 中嵌入js标签时，因为hexo解析的问题，js代码中不能使用`<=`

