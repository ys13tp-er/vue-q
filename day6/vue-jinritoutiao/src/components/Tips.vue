<template>
    <div>
        <div data-reactroot="" id="pageletPopupBanner" class="tt-modal">
            <div class="popup">
                <div class="banner"></div>
                <p>已加载好您感兴趣的头条</p>
                <div class="download-btn" data-node="downloadBtn">立即打开</div>
                <div @click="tipshow" class="close" data-node="close"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tipbool: false //这是需要传递的数据
    };
  },
  methods: {
    tipshow() {
      this.$emit("tipshow", this.tipbool); //发射info事件
    }
  }
};
</script>