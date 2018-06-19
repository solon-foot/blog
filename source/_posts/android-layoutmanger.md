title: android-layoutmanger
tags:
  - Android
date: 2018-06-12 10:39:05
---


一步一步自定义LayoutManager，使用recycleview实现一下是几种实现参考,推荐直接使用[recycler-layoutmanger](https://github.com/BelooS/ChipsLayoutManager)，可以满足正常需求，作者已经停止维护了。。。


|图片|地址|
|:-----------:|:---------------------|
|![img](https://github.com/hongyangAndroid/FlowLayout/blob/master/flowlayout_03.gif)|[FlowLayout](https://github.com/hongyangAndroid/FlowLayout)|
|![img](https://github.com/ApmeM/android-flowlayout/raw/master/img/PORTRAIT_RTL_RIGHTBOTTOM_HORIZONTAL_DEBUG.png)|[FlowLayout](https://github.com/ApmeM/android-flowlayout)|
|![img](https://github.com/BelooS/ChipsLayoutManager/blob/master/images/insert_delete_animations.gif)|[recycler-layoutmanger](https://github.com/BelooS/ChipsLayoutManager)|

<!--more-->

### 准备
* 简单的编写一个RecycleView的布局容器可以简单的像下面这样

{% codeblock MainActivity.java lang:java %}

mRecyclerView = new RecyclerView(this);
setContentView(mRecyclerView);
mRecyclerView.setAdapter(new Adapter() {
    int[] colors = new int[]{Color.BLACK, Color.DKGRAY, Color.GRAY, Color.LTGRAY, Color.WHITE,
        Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW, Color.CYAN, Color.MAGENTA, 0xFF00FFFF,
        0xFFFF00FF, 0xFF00FF00, 0xFF800000, 0xFF808000, 0xFF008080};
    String[] words= new String[]{"Genevieve Haydn","Mabel Franklin","Lena Raman","Tiffany Bray","Gabrielle Surrey","Keith Becher","Lydia Lynd","Kay Wordsworth","Prudence Jessie","Ruby Middleton","Caroline Ivan","Nat Sassoon","Colby Henry","Olivia Jerry","Rosalind Hawthorne","Basil Wood","Ferdinand Jane","Lou Bunyan","Sean Julian","Devin Pater","Max Hudson","Lindsay Bruno"};

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        TextView textView = new TextView(parent.getContext());
        textView.setPadding(20,20,20,20);

        return new ViewHolder(textView) {
        };
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.itemView.setBackgroundColor(colors[position % colors.length]);
        ((TextView)holder.itemView).setText(words[position%words.length]);
    }

    @Override
    public int getItemCount() {
        return 1000;
    }
});
//mRecyclerView.setLayoutManager(new LinearLayoutManager(this));
mRecyclerView.setLayoutManager(new FlowLayoutManager());

{% endcodeblock %}

* 创建FlowLayoutManger.java
{% codeblock FlowLayoutManger.java lang:java %}
public class FlowLayoutManager extends LayoutManager {

    @Override
    public LayoutParams generateDefaultLayoutParams() {
        return new RecyclerView.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
    }
}
{% endcodeblock %}

### 一、实现`generateDefaultLayoutParams`
### 二、实现 布局代码
```java java abc abc

private int totalHeight;
    @Override
    public void onLayoutChildren(Recycler recycler, State state) {
        if (getItemCount()<=0 || state.isPreLayout()) {
            Log.e("main","xxxxx:"+getItemCount()+" state:" + state.isPreLayout());
            return;
        }
        detachAndScrapAttachedViews(recycler);

        int maxWidth = getWidth();
        int tWidth = 0;
        int tHeight = 0;
        //计算item并重新布局
        Log.e("main","itemCount:"+getItemCount());
        for (int i = 0; i < getItemCount(); i++) {
            View view = recycler.getViewForPosition(i);
            addView(view);
            measureChild(view, 0, 0);
            int width = getDecoratedMeasuredWidth(view);
            int height = getDecoratedMeasuredHeight(view);
            //摆放到需要的位置
            if (width + tWidth > maxWidth) { //所有item的为width<=maxWidth,否则会有问题
                tWidth = 0;
                tHeight += height;//假设height 高度一致
            }
            layoutDecorated(view, tWidth, tHeight, tWidth + width, tHeight + height);
            tWidth+=width;
            totalHeight = tHeight+height;
        }

    }
```

### [参考代码](https://www.jianshu.com/p/715b59c46b74)