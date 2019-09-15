<template name="component-name">
  <div>
    <!-- 搜索框 -->
    <van-search
      class="searchFixed"
      shape="round"
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      :label="!menuFixed?'广州':''"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <!-- 宫格 -->
    <!-- 声明式导航 :to="`/detail/${index}/yao`" -->
    <van-grid style="margin-top:50px">
      <van-grid-item
        v-for="(k,index) in kingkongListComputed"
        @click="navTo(index)"
        :key="index"
        :icon="k.icon"
        :text="k.name"
      />
    </van-grid>
    <!-- 分割线 -->
    <van-divider>附近商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu :class="{menuFixed}">
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
    </van-dropdown-menu>
    <!-- 商品列表 -->
    <van-list
      style="margin-bottom:50px"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getShopList"
    >
      <!-- 商品卡片 -->
      <van-card
        v-for="(item,index) in shopList"
        :key="index"
        num="2"
        price="2.00"
        :desc="item.address"
        :title="item.shopName"
        :thumb="item.picUrl"
      />
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索框的值
      value: "",
      //   宫格
      kingkongList: [],
      //   下拉菜单
      value1: 0,
      menu: [],
      // 标签栏
      active: 0,
      list: [],
      // 列表
      shopList: [],
      loading: false,
      finished: false,
      // 是否固定下拉菜单，启动吸顶菜单
      menuFixed: false
    };
  },
  methods: {
    onSearch() {},
    // 编程式导航
    navTo(id) {
      this.$router.push({
        name: "detail",
        params: { id, name: "lin" }
      });
    },
    async getShopList() {
      // 获取商店信息
      let poilist = await this.$axios.post(
        "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/poilist"
      );
      this.shopList = [...this.shopList, ...poilist.data.data.shopList];
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.shopList.length >= 40) {
        this.finished = true;
      }
    }
  },
  computed: {
    kingkongListComputed() {
      // 切割成八个宫格
      return this.kingkongList.slice(0, 8);
    }
  },
  async created() {
    //   获取宫格数据
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/kingkong"
    );
    this.kingkongList = kingkongList.data.data.kingkongList;
    // 获取下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/filterconditions"
    );
    this.menu = menu.data.data.sortVOList;
    // 首次加载
    this.getShopList();
  },
  // 当你使用了keep-alive缓存组件的时候，创建个销毁的生命周期都不会触发
  // 所以你要在进页面的时候重新监听这个全局事件
  activated() {
    window.onscroll = () => {
      // 吸顶菜单
      // console.log(window.scrollY);
      if (window.scrollY >= 270) {
        this.menuFixed = true;
      } else {
        this.menuFixed = false;
      }
    };
  },
  deactivated() {
    window.onscroll = null;
  },
  destoryed() {
    // 在home离场的时候销毁全局监听事件
    window.onscroll = null;
  },
  //   过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((element, index) => {
        //   往对象里面新增一个text属性值
        element.text = element.name;
        element.value = index;
        // 构造一个新的数组
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>
<style scoped>
.menuFixed {
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 99;
}
.searchFixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
</style>
