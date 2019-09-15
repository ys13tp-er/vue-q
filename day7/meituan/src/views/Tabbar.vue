<template>
  <div>
    <!-- <transition name="bounce"> -->
    <!-- 把路由组件缓存到内存里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- </transition> -->
    <!-- 标签栏 -->
    <van-tabbar :route="true" v-model="active">
      <!-- 声明式导航 :url="t.url" -->
      <van-tabbar-item
        @click="navTo(t.url)"
        v-for="(t,index) in tabbarsItems"
        :key="index"
        :icon="t.icon"
        v-text="t.title"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 记录你所在第几项
      active: 0,
      tabbarsItems: [
        {
          title: "首页",
          // 路由名字
          url: "home",
          // 图标
          icon: "home-o"
        },
        {
          title: "订单页",
          url: "order",
          icon: "search"
        },
        {
          title: "我的",
          url: "mine",
          icon: "friends-o"
        }
      ]
    };
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
};
</script>
<style>
.bounce-enter-active {
  display: block;
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  display: none;
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>