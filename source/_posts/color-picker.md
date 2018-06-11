title: 颜色选择器
date: 2018-06-11 09:22:32
tags:
 - 游戏
categories:
 - 工具

---

多种颜色选择
尚未完成

<!--more-->
- [ ] 完成基本的颜色调色板的调用
- [ ] 生成配色方案

<link type="text/css" rel="stylesheet" href="/color-picker/color-picker.css" />
<div>
    <div class="sp-container">
        <div class="sp-top-inner">
            <div class="sp-color"
                 style="background-color: rgb(0,255,0);border: solid 1px #666;">
                <div class="sp-sat sp-sat-hsv">
                    <div class="sp-val sp-val-hsv">
                        <div class="sp-dragger"></div>
                    </div>
                </div>
            </div>
            <div class="sp-right sp-right-hsv" >
                <div class="sp-slider"></div>
            </div>
        </div>
    </div>
    <div class="sp-container">
        <div class="sp-top-inner">
            <div class="sp-color sp-hsl">
                <div class="sp-sat sp-sat-hsl">
                        <div class="sp-dragger"></div>
                </div>
            </div>
            <div class="sp-right" style="background-color: blue">
                <div class="sp-sat sp-right-sat-hsl"></div>
                <div class="sp-slider"></div>
            </div>
        </div>
    </div>
  <div id="slider" class="slider-bar">
        <div class="slider"></div>
    </div>

</div>
