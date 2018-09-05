## react 移动端购票
### 技术栈
 react redux react-router-dom webpack less 

### 项目描述
+ 本项目为移动端购票项目，主要实现了城市切换，热门电影展示，电影详情页，电影评论（筛选和评论），买座购票等功能
+ 整体布局为响应式布局，通过flex和百分比布局实现
+ 路由跳转通过react-router-dom 实现
+ 选座位置通过canvas 绘制而成

### 项目优化
+ 轮播图 通过 react-responsive-carousel 实现，通过padding-bottom:40%,实现图片在缩放时长宽比例保持恒定
+ 购票界面 通过canvas绘制，获得页面设备的``devicePixelRadio(dp)``,绘制时按照预先像素``*dp``绘制，之后通过style将canvas画布恢复正常像素，最后实现画布的高质量
+ 将常用组件（如文字的折叠收起，星形评分等）再封装出去
+ 运用redux，解耦和（如选座等组件数据的联动）
+ 防止用户名过长，添加text-overflow:ellipse，如果文字有flex属性时，需在盒子上添加overflow:hidden


     ![](https://github.com/LKCCY/lkccy/blob/master/1.gif)
