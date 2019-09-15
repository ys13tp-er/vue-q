<template>
  <div>
    <router-view></router-view>
    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <!-- 声明式导航 :url="t.url" -->
      <van-tabbar-item url="#/Tabbar/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item url="#/Tabbar/find" icon="search">发现</van-tabbar-item>
      <van-tabbar-item url="#/Tabbar/order" icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item url="#/Tabbar/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 记录你所在第几项
      active: 0
    };
  }
};
</script>