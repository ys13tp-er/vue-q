<template>
  <!-- V -->
  <header v-text="title"></header>
</template>
<script>
export default {
  // 选项 M
  data() {
    return {
      title: "头部组件"
    };
  }
};
</script>
<style scoped>
header {
  text-align: center;
  line-height: 50px;
  width: 100%;
  height: 50px;
  color: white;
  background-color: red;
}
</style>
