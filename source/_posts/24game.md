title: 计算24点
date: 2018-06-09 20:50:41
tags:
 - 游戏
categories:
 - 工具
---
快速求解24点
<!--more-->
<script type="text/javascript" src="/24game/24game.js"></script>
<center><form id="breast" onsubmit="return valid(this)">
<b>请输入四个整数</b>：<br>
<div style="white-space: nowrap;overflow: auto;background-color: red;display: inline-flex;">
<input type="text" maxlength="6" name="a1" size="5" autocomplete="off" style="display: inline;text-align: center;">
<input type="text" maxlength="6" name="a2" size="5" autocomplete="off" style="display: inline;text-align: center;">
<input type="text" maxlength="6" name="a4" size="5" autocomplete="off" style="display: inline;text-align: center;">
<input type="text" maxlength="6" name="a8" size="5" autocomplete="off" style="display: inline;text-align: center;">
</div>
<br>
<input name="submit" type="submit" value="计算" >&nbsp;&nbsp;&nbsp;&nbsp;<input name="提交" type="reset" onclick="clean();" value="清除" >
<span id="result"></span>
</form></center>

> 更多解法，查看console