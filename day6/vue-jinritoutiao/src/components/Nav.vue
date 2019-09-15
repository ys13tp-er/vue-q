<template>
  <div class="top_menu_bar ">
    <div class="top_menu_more">
      <div class="list_shadow"></div>
      <a class="more_btn" href="javascript:void(0)">
        <span class="cross"></span>
      </a>
    </div>
    <div class="top_menu_list">
      <a href="javascript:void(0)" v-for="(item,index) in title" @click="toggle(index)" :class="{'cur': bool[index],'btn': true}">{{item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        "推荐",
        "视频",
        "热点",
        "社会",
        "娱乐",
        "军事",
        "科技",
        "汽车",
        "房产",
        "家居",
        "体育",
        "财经"
      ],
      bool: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    toggle(index) {
      this.bool = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.bool[index] = 1;
      this.$emit("mainshow", index); //传选项mainshow
    }
  }
};
</script>
