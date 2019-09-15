<template>
  <div :class="{
  'weui-search-bar_focusing': bool,
  'weui-search-bar': true
  }" id="searchBar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          v-model="searchInput"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
          v-focus
        />
        <a @click="searchClear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label @click="toggle" class="weui-search-bar__label" id="searchText">
        <i class="weui-icon-search"></i>
        <span v-text="title"></span>
      </label>
    </form>
    <a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
export default {
  // M
  data() {
    return {
      title: "搜索",
      // 用于控制搜索框的状态
      bool: false,
      // 搜索的内容
      searchInput: ""
    };
  },
  methods: {
    toggle() {
      // 取反
      this.bool = !this.bool;
    },
    // 清空搜索框
    searchClear() {
      this.searchInput = "";
    }
  },
  // 自定义指令
  directives: {
    focus(el, binding) {
      // 自动聚焦输入框
      el.focus();
    }
  }
};
</script>
