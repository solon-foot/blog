title: android-layoutmanger
tags:
 - Android

---

一步一步自定义LayoutManager，使用recycleview实现一下是几种实现参考,推荐直接使用[recycler-layoutmanger](https://github.com/BelooS/ChipsLayoutManager)，可以满足正常需求，作者已经停止维护了。。。


|图片|地址|
|:-----------:|:---------------------|
|![img](https://github.com/hongyangAndroid/FlowLayout/blob/master/flowlayout_03.gif)|[FlowLayout](https://github.com/hongyangAndroid/FlowLayout)|
|![img](https://github.com/ApmeM/android-flowlayout/raw/master/img/PORTRAIT_RTL_RIGHTBOTTOM_HORIZONTAL_DEBUG.png)|[FlowLayout](https://github.com/ApmeM/android-flowlayout)|
|![img](https://github.com/BelooS/ChipsLayoutManager/blob/master/images/insert_delete_animations.gif)|[recycler-layoutmanger](https://github.com/BelooS/ChipsLayoutManager)|

<!--more-->

### 准备
* 简单的编写一个RecycleView的布局容器可以简单的像这样

``` java
mRecyclerView = new RecyclerView(this);
    mRecyclerView.setAdapter(new Adapter() {
        int[] colors = new int[]{Color.BLACK, Color.DKGRAY, Color.GRAY, Color.LTGRAY, Color.WHITE,
            Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW, Color.CYAN, Color.MAGENTA, 0xFF00FFFF,
            0xFFFF00FF, 0xFF00FF00, 0xFF800000, 0xFF808000, 0xFF008080};
        String[] words= null;

        @NonNull
        @Override
        public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            TextView textView = new TextView(parent.getContext());

            return new ViewHolder(textView) {
            };
        }

        @Override
        public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
            holder.itemView.setBackgroundColor(colors[position % colors.length]);
            ((TextView)holder.itemView).setText("" + position);
        }

        @Override
        public int getItemCount() {
            return 1000;
        }
    });


```