<template>
  <div>详情页</div>
</template>
<script>
export default {
  // 接收路由组建传给我的props
  props: ["default", "sidebar"],
  created() {
    // 触发action
    this.$store.dispatch("setAuthor","oooo")
    // 通知mumtation去修改state里面的值
    // this.$store.commit("setAuthor", "lin");
    // console.log(this.$store._mutations.setAuthor);
    // console.log(this.$store.getters.getAuthor);
    // console.log(this.$store.state.author);
  }
};
</script>

