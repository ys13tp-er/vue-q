<template>
  <div>
    <!-- 头部 -->
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div aria-label="当前地址：千峰教育公司，轻点两下重新选择" role="button" class="index-2S5Ah_0" data-spm-anchor-id="a2ogi.12117543.0.i0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
            <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
          </svg>
          <span class="index-2uW_v_0" data-spm-anchor-id="a2ogi.12117543.0.i3">千峰教育公司</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
            <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
          </svg>
        </div>
      </div>
    </header>
    <!-- 搜索 -->
    <div role="button" class="search">
      <a class="content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
        </svg>
        <span>搜索饿了么商家、商品名称</span>
      </a>
    </div>
    <!-- 导航宫格 -->
    <div>
      <van-swipe :loop="false" indicator-color="#fe7100">
        <van-swipe-item>
          <div>
            <van-grid :column-num="5">
              <van-grid-item v-for="(k,index) in kingkongListComputed" :key="index" :icon="k.link" :text="k.name" />
            </van-grid>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div>
            <van-grid :column-num="5">
              <van-grid-item v-for="(k,index) in kingkongListComputed2" :key="index" :icon="k.link" :text="k.name" />
            </van-grid>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div>
        <div class="index-1ECZ3_0">
          <section id="activity-lego" class="index-1y1Q5_0">
            <div class="index-3xB2N_0">
              <div class="index-Q3GS5_0 index-1xT5J_0">
                <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
                <div class="index-2W67h_0">搭配齐全吃得好</div>
                <div class="index-1DFa7_0">
                  <!---->立即抢购 &gt;
                </div><img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"></div>
              <!---->
            </div>
          </section>
          <div class="index-3eoZ-_0">
            <div class="index-3M-d6_0"><img alt="" class="index-1QvOZ_0" src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/">
              <span class="index-M9mXY_0">超级会员</span>
              <span class="index-tO6Fz_0">
                <b></b>每月领20元红包</span>
            </div>
            <a href="javascript:" ubt-click="101933" ubt-data-type="1" class="index-1-R5E_0">
              <b class="index-4F0aw_0"></b>立即开通</a>
          </div>
          <!---->
          <!---->
        </div>
        <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+" class="BackTop-icon_2Js4K94"></div>
        <!---->
      </div>
    </div>
    <!-- 店铺 -->
    <div>
      <div id="shoplist-title" class="shoplist-title" style="">推荐商家</div>
      <!-- 筛选 -->
      <van-sticky :offset-top="51.01">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
          <van-dropdown-item disabled title="距离最近" title-class="nochanges" />
          <van-dropdown-item disabled title="品质联盟" title-class="nochanges" />
          <van-dropdown-item title="筛选" ref="item">
            <van-switch-cell v-model="switch1" title="包邮" />
            <van-switch-cell v-model="switch2" title="团购" />
            <van-button block type="info" @click="onConfirm">确认</van-button>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-sticky>
      <!-- 列表 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   宫格
      kingkongList: [],
      active: 0,
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "综合排序", value: 0 },
        { text: "好评优先", value: 1 },
        { text: "销量最高", value: 2 },
        { text: "起送价最低", value: 3 },
        { text: "配送最快", value: 4 },
        { text: "配送费最低", value: 5 }
      ],
      list: [],
      loading: false,
      finished: false
    };
  },
  computed: {
    kingkongListComputed() {
      // 切割成八个宫格
      return this.kingkongList.slice(0, 10);
    },
    kingkongListComputed2() {
      // 切割成八个宫格
      return this.kingkongList.slice(10);
    }
  },
  async created() {
    //   获取宫格数据
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d4041cad3d96f3926d5d9fc/nav/nav"
    );
    this.kingkongList = kingkongList.data[0].entries;
    // console.log(kingkongList.data[0].entries);
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>


<style>
.index-JMUSj_0 {
  padding: 0.266667rem 0.373333rem 0;
  padding: 2.666667vw 3.733333vw 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
}

.index-1DPx9_0 {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 0.92rem;
  height: 9.2vw;
}

.index-1DPx9_0,
.index-2S5Ah_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-2S5Ah_0 {
  width: 60%;
  font-weight: 700;
}

.index-okfdP_0 {
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.413333rem;
  height: 4.133333vw;
  fill: #fff;
}

.index-2iXz3_0 {
  width: 0.186667rem;
  width: 1.866667vw;
  height: 0.093333rem;
  height: 0.933333vw;
  fill: #fff;
}

.index-2uW_v_0 {
  margin: 0 0.133333rem;
  margin: 0 1.333333vw;
  font-size: 18px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.index-3NnY9_0 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow: auto;
  background-color: #f4f4f4;
  -webkit-animation: index-1dF3G_0 0.3s;
  animation: index-1dF3G_0 0.3s;
  -webkit-overflow-scrolling: touch;
}

.index-3s7qg_0 {
  position: relative;
  width: 100%;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
  text-align: center;
  font-size: 0.32rem;
}

.index-3_HEV_0 {
  line-height: 1.173333rem;
  line-height: 11.733333vw;
  font-size: 0.48rem;
}

.index-111Qy_0 {
  font-size: 0.426667rem;
  position: absolute;
  top: 0.346667rem;
  top: 3.466667vw;
  right: 0.426667rem;
  right: 4.266667vw;
}

.index-11GLi_0 {
  position: absolute;
  left: 0.333333rem;
  left: 3.333333vw;
  top: 0.333333rem;
  top: 3.333333vw;
  fill: #fff;
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
}

.index-2_Jv4_0 {
  position: relative;
  padding: 0.266667rem 0.4rem;
  padding: 2.666667vw 4vw;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.index-HhHdo_0 {
  position: absolute;
  width: 0.373333rem;
  width: 3.733333vw;
  height: 0.373333rem;
  height: 3.733333vw;
  left: 0.586667rem;
  left: 5.866667vw;
  top: 0.56rem;
  top: 5.6vw;
}

.index-2V7cn_0 {
  width: 100%;
  height: 0.96rem;
  height: 9.6vw;
  color: #999;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  padding: 0.24rem 0.48rem 0.24rem 0.666667rem;
  padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
  background: #f2f2f2;
  -webkit-appearance: none;
}

.index-2ljEK_0 > h4,
.index-2V7cn_0 {
  font-size: 0.346667rem;
  line-height: 0.48rem;
  line-height: 4.8vw;
}

.index-2ljEK_0 > h4 {
  padding: 0.4rem 0 0.186667rem 0.4rem;
  padding: 4vw 0 1.866667vw 4vw;
  color: #666;
}

.index--5jlL_0 {
  padding-top: 4rem;
  padding-top: 40vw;
}

.index-11hsB_0 {
  background: #fff;
  height: 1.173333rem;
  height: 11.733333vw;
  font-size: 0.4rem;
  color: #333;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 0.453333rem 0 0.4rem;
  padding: 0 4.533333vw 0 4vw;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.index-11hsB_0 span:first-child {
  font-weight: 700;
  max-width: 6.666667rem;
  max-width: 66.666667vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.index-11hsB_0 .index-Ziyuq_0 {
  color: #2395ff;
  font-size: 0.373333rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 0.4rem;
  line-height: 4vw;
}

.index-11hsB_0 svg {
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}

.index-11hsB_0 .index-2vImi_0 {
  -webkit-animation: index-2vImi_0 0.8s linear infinite;
  animation: index-2vImi_0 0.8s linear infinite;
}

@-webkit-keyframes index-2vImi_0 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes index-2vImi_0 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.index-3I9NR_0 {
  background-color: #fff;
}

.index-3I9NR_0,
.index-21dnA_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.index-21dnA_0 {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 0.4rem;
  padding-left: 4vw;
}

.index-1xJ4H_0 {
  font-size: 0.32rem;
  background: #fff;
  width: 1.066667rem;
  width: 10.666667vw;
  color: #333;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}

.index-2KCWC_0 {
  width: 0.16rem;
  width: 1.6vw;
  height: 0.16rem;
  height: 1.6vw;
}

.index-19dbo_0 {
  font-size: 0.32rem;
  color: #999;
  text-align: center;
  background: #fff;
  padding: 0.533333rem 0;
  padding: 5.333333vw 0;
}

.index-19dbo_0,
.index-19dbo_0 p:first-child {
  line-height: 0.533333rem;
  line-height: 5.333333vw;
}

.index-19dbo_0 p:first-child {
  font-size: 0.4rem;
  margin-bottom: 0.213333rem;
  margin-bottom: 2.133333vw;
}

.AddressCell-2WCnC_0 {
  font-size: 0.32rem;
  background-color: #fff;
  padding: 0.293333rem 0.4rem;
  padding: 2.933333vw 4vw;
  color: #2a2a2a;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.AddressCell-2WCnC_0 + .AddressCell-2WCnC_0 {
  border-top: 1px solid #eee;
}

.AddressCell-2WCnC_0 .AddressCell-jv0Ry_0 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.AddressCell-2WCnC_0 .AddressCell-3Okww_0 {
  width: 1.333333rem;
  width: 13.333333vw;
  text-align: center;
}

.AddressCell-2FRCi_0 {
  font-weight: 700;
  font-size: 0.4rem;
  color: #333;
}

.AddressCell-2FRCi_0 span {
  color: #999;
}

.AddressCell-3XoxS_0 {
  color: #666;
}

.AddressCell-1EJMW_0 {
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  color: #666;
}

.AddressCell-1hXr8_0 {
  color: #333;
  font-size: 0.32rem;
  line-height: 0.453333rem;
  line-height: 4.533333vw;
  margin-top: 0.053333rem;
  margin-top: 0.533333vw;
}

.foodentry {
  overflow: hidden;
  height: 4.72rem;
  height: 47.2vw;
  background-color: #fff;
  text-align: center;
}

.foodentry a {
  position: relative;
  float: left;
  margin-top: 0.293333rem;
  margin-top: 2.933333vw;
  width: 20%;
}

.foodentry img {
  width: 1.066667rem;
  width: 10.666667vw;
  height: 1.066667rem;
  height: 10.666667vw;
  vertical-align: top;
}

.foodentry .title {
  display: block;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  color: #666;
  font-size: 0.32rem;
}

.foodentry .service {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.24rem;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
  border-radius: 0 0 0.8rem 0.8rem;
  border-radius: 0 0 8vw 8vw;
}

.foodentry .container {
  position: relative;
  display: inline-block;
  width: 1.2rem;
  width: 12vw;
  height: 1.2rem;
  height: 12vw;
}

.foodentry .container img {
  width: 100%;
  height: 100%;
}

.foodentry .mint-swipe-indicator {
  margin: 0 0.066667rem;
  margin: 0 0.666667vw;
  width: 0.24rem;
  width: 2.4vw;
  height: 0.04rem;
  height: 0.4vw;
  border-radius: 0;
}

.foodentry .mint-swipe-indicator.is-active {
  width: 0.24rem;
  width: 2.4vw;
  background-color: #00a6ff;
}

.shell-Uhf82_0 {
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding-top: 0.293333rem;
  padding-top: 2.933333vw;
}

.shell-tYBiP_0,
.shell-Uhf82_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.shell-tYBiP_0 {
  width: 1.066667rem;
  width: 10.666667vw;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.shell-tYBiP_0:before {
  width: 1.066667rem;
  width: 10.666667vw;
  height: 1.066667rem;
  height: 10.666667vw;
  margin-top: 0.08rem;
  margin-top: 0.8vw;
  margin-bottom: 0.053333rem;
  margin-bottom: 0.533333vw;
  border-radius: 50%;
}

.shell-tYBiP_0:after,
.shell-tYBiP_0:before {
  content: "";
  display: inline-block;
  background: #f4f4f4;
}

.shell-tYBiP_0:after {
  width: 0.8rem;
  width: 8vw;
  height: 0.373333rem;
  height: 3.733333vw;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
}

.BackTop-wrapper_3XDbcaq {
  position: fixed;
  right: 0.4rem;
  right: 4vw;
  bottom: 2rem;
  bottom: 20vw;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 1.133333rem;
  width: 11.333333vw;
  height: 1.133333rem;
  height: 11.333333vw;
  border: 0.013333rem solid #999;
  border: 0.133333vw solid #999;
  border-radius: 50%;
  background: #fff;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  will-change: transform;
}

.BackTop-iPhoneXMode_BOTAtQM {
  bottom: 2.453333rem;
  bottom: 24.533333vw;
}

.BackTop-icon_2Js4K94 {
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
}

.BackTop-enter_3k4vp_R,
.BackTop-leave-active_TK_GVwZ {
  opacity: 0;
}

.index-wrapper_1Rsz2pX {
  height: 1.6rem;
  height: 16vw;
}

.index-footer_Gtduid_ {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 0.12rem;
  padding-top: 1.2vw;
  background-color: #fff;
  min-height: 1.333333rem;
  min-height: 13.333333vw;
  -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.index-footerTab_bl0lbJN {
  display: block;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
}

.index-footerTabIcon_1EbB8wS {
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
}

.index-footerTabText_1It8yh0 {
  display: block;
  color: #8e8e93;
  font-size: 0.266667rem;
}

.index-footerTabTextActive_3gjOLc6 {
  color: #0089dc;
}

.Rating-wrapper_TYbDrku_0 {
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

.Rating-actived_GBtiHkB_0,
.Rating-gray_1kpffd5_0 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.Rating-actived_GBtiHkB_0 img,
.Rating-gray_1kpffd5_0 img {
  width: 1.493333rem;
  width: 14.933333vw;
  height: 0.266667rem;
  height: 2.666667vw;
  -webkit-flex: none;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  max-width: none;
}

.Rating-actived_GBtiHkB_0 {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.index-container_10L_lQb {
  position: relative;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 0.4rem 0;
  padding: 4vw 0;
  list-style: none;
  font-size: 0.293333rem;
  line-height: normal;
}

.index-shopInfo_1RRTZ0d {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}

.index-main_N3FfcSz {
  -webkit-flex-grow: 1;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}

.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}

.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-shopname_39Y7e3U {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: 0;
  color: #333;
  font-weight: 700;
  font-size: 0.4rem;
  overflow: hidden;
}

.index-shopname_39Y7e3U span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index-premium_39rl0v9 {
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  padding: 0.026667rem 0.066667rem;
  padding: 0.266667vw 0.666667vw;
  color: transparent;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.293333rem;
  font-style: normal;
  line-height: normal;
}

.index-premium_39rl0v9:after {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  content: attr(content);
  padding: 0.011373rem 0.02844rem;
  padding: 0.113733vw 0.2844vw;
  padding: 0.053333rem 0.133333rem;
  padding: 0.533333vw 1.333333vw;
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.125147rem;
  font-size: 0.586667rem;
  border-radius: 0.022747rem;
  border-radius: 0.227467vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  background-image: -webkit-linear-gradient(229deg, #fff100, #ffe339);
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  white-space: nowrap;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-rateWrap_39dWx_g {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-rate_WsK58g8,
.index-stars_vPkk9Vv {
  margin-right: 0.106667rem;
  margin-right: 1.066667vw;
}

.index-moneylimit_2fCq9W5 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
}

.index-moneylimit_2fCq9W5 span + span:before {
  margin: 0 0.017067rem;
  margin: 0 0.170667vw;
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}

.index-moneylimit_2fCq9W5 span:nth-of-type(2) {
  overflow: hidden;
  max-width: 2.666667rem;
  max-width: 26.666667vw;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index-activityWrap_3mo1GyG {
  padding-left: 2.266667rem;
  padding-left: 22.666667vw;
}

.index-tagLine_1rJw_lq,
.index-tagsSlot_3bpWx9O {
  margin: 0.266667rem 0.266667rem 0 0;
  margin: 2.666667vw 2.666667vw 0 0;
}

.index-tagLine_1rJw_lq {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-tagLine_1rJw_lq > span {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  margin-bottom: 0.106667rem;
  margin-bottom: 1.066667vw;
}

.index-activities_25AUDsx {
  position: relative;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  overflow: hidden;
}

.index-activities_25AUDsx,
.index-supportWrap_2lTcxr2 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.index-supportWrap_2lTcxr2 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
}

.index-supportWrap_2lTcxr2 > li {
  position: relative;
  height: 0.346667rem;
  height: 3.466667vw;
  width: 0.346667rem;
  width: 3.466667vw;
  margin-left: 0.08rem;
  margin-left: 0.8vw;
}

.index-supportWrap_2lTcxr2 > li:after {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  font-size: 0.113773rem;
  font-size: 0.533333rem;
  color: #999;
  content: attr(content);
  border-radius: 0.00568rem;
  border-radius: 0.0568vw;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  width: 0.147907rem;
  width: 1.479067vw;
  width: 0.693333rem;
  width: 6.933333vw;
  height: 0.147907rem;
  height: 1.479067vw;
  height: 0.693333rem;
  height: 6.933333vw;
  line-height: normal;
  border: 0.013333rem solid #ddd;
  border: 0.133333vw solid #ddd;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-supportWrap_2lTcxr2 > li:last-child {
  margin-right: 0.013333rem;
  margin-right: 0.133333vw;
}

.index-supportWrap_2lTcxr2 > li.index-ad_2AGWmo_ {
  height: 0.293333rem;
  height: 2.933333vw;
  width: 0.48rem;
  width: 4.8vw;
}

.index-supportWrap_2lTcxr2 > li.index-ad_2AGWmo_:after {
  color: #ccc;
  font-size: 0.07964rem;
  font-size: 0.373333rem;
  width: 0.2048rem;
  width: 2.048vw;
  width: 0.96rem;
  width: 9.6vw;
  height: 0.125147rem;
  height: 1.251467vw;
  height: 0.586667rem;
  height: 5.866667vw;
  border: 0.013333rem solid #eee;
  border: 0.133333vw solid #eee;
}

.index-supportWrap_2lTcxr2 .index-omit_1q3Tw0_ {
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
  padding: 0 0.133333rem;
  padding: 0 1.333333vw;
}

.index-timedistanceWrap_2Dp_kzY {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #999;
}

.index-timedistanceWrap_2Dp_kzY span:after {
  margin: 0 0.017067rem;
  margin: 0 0.170667vw;
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}

.index-timedistanceWrap_2Dp_kzY span:last-child:after {
  display: none;
}

.index-distanceWrap_1EPAlti > span {
  display: inline-block;
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}

.index-activityList_1wvwwUY {
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
  overflow: hidden;
}

.index-activityList_1wvwwUY > div:not(:first-child) {
  margin-top: 0.066667rem;
  margin-top: 0.666667vw;
}

.index-activityBtn_tMk-e1C {
  padding: 0.08rem 0.266667rem 0 0;
  padding: 0.8vw 2.666667vw 0 0;
  color: #999;
  text-align: right;
  font-size: 0.266667rem;
  line-height: 1;
}

.index-activityBtn_tMk-e1C span {
  vertical-align: middle;
}

.index-activityBtn_tMk-e1C img {
  width: 0.173333rem;
  width: 1.733333vw;
  opacity: 0.9;
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  fill: currentColor;
  will-change: transform;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.index-activityBtn_tMk-e1C img.index-open_33dKeGm {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.index-recommendTag__2apOBL {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.013333rem;
  border-radius: 0.133333vw;
  font-size: 0.266667rem;
  color: #666;
  height: 0.4rem;
  height: 4vw;
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
  color: #e8470b;
}

.index-recommendTag__2apOBL img {
  margin-top: 0.04rem;
  margin-top: 0.4vw;
  height: 0.266667rem;
  height: 2.666667vw;
  width: 0.266667rem;
  width: 2.666667vw;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.index-tag_3oprLi5 {
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
}

.index-tagGhost_1KCu_KY {
  border: 0.026667rem solid #ddd;
  border: 0.266667vw solid #ddd;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  padding: 0 0.213333rem;
  padding: 0 2.133333vw;
}

.index-dashedline_7B79b3W {
  width: 100%;
  height: 0.013333rem;
  height: 0.133333vw;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
}

.index-actRow_2f_uNNA {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.293333rem;
  line-height: 0.48rem;
  line-height: 4.8vw;
}

.index-actRow_2f_uNNA .index-iconWrap_1xJuKaY {
  display: inline-block;
  position: relative;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
  height: 0.373333rem;
  height: 3.733333vw;
  width: 0.373333rem;
  width: 3.733333vw;
  vertical-align: middle;
}

.index-actRow_2f_uNNA .index-icon_1fBCxBk {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 0.746667rem;
  height: 7.466667vw;
  width: 0.746667rem;
  width: 7.466667vw;
  font-size: 0.56rem;
  color: #fff;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.index-actRow_2f_uNNA .index-desc_JLha7Vr {
  display: inline-block;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.index-adLite_35BlsGa {
  text-align: center;
  display: inline-block;
  height: 0.426667rem;
  height: 4.266667vw;
  width: 0.746667rem;
  width: 7.466667vw;
  position: relative;
  font-size: 0.266667rem;
  color: transparent;
}

.index-adLite_35BlsGa:after {
  content: attr(content);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.113773rem;
  font-size: 0.533333rem;
  color: #d8d8d9;
  white-space: nowrap;
  height: 0.18204rem;
  height: 1.8204vw;
  height: 0.853333rem;
  height: 8.533333vw;
  width: 0.318573rem;
  width: 3.185733vw;
  width: 1.493333rem;
  width: 14.933333vw;
  line-height: 0.18204rem;
  line-height: 1.8204vw;
  line-height: 0.853333rem;
  line-height: 8.533333vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  border: 0.013333rem solid #c9c8c8;
  border: 0.133333vw solid #c9c8c8;
  border-radius: 0.022747rem;
  border-radius: 0.227467vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
}

.index-dislikeModal_1am3w6C {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.index-dislike_2_wUsCr {
  width: 1.333333rem;
  width: 13.333333vw;
  height: 1.333333rem;
  height: 13.333333vw;
  border-radius: 50%;
  background: #fff;
  line-height: 1.333333rem;
  line-height: 13.333333vw;
  text-align: center;
  color: #333;
}

.index-aliday_1m1a-Gy {
  display: inline-block;
  height: 0.373333rem;
  height: 3.733333vw;
  width: 0.853333rem;
  width: 8.533333vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

.logo-container_XoH2Vit_0 {
  position: relative;
  -webkit-flex: none;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  z-index: 0;
}

.logo-main_21aInWJ_0 {
  position: relative;
  width: 1.733333rem;
  width: 17.333333vw;
  height: 1.733333rem;
  height: 17.333333vw;
}

.logo-logo_3S1eSkn_0 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  border: 0.013333rem solid rgba(0, 0, 0, 0.08);
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}

.logo-statusTip_1CEG6F-_0 {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  border-bottom-right-radius: 0.053333rem;
  border-bottom-right-radius: 0.533333vw;
  border-bottom-left-radius: 0.053333rem;
  border-bottom-left-radius: 0.533333vw;
  text-align: center;
  white-space: nowrap;
}

.logo-statusTipText_1Dx4kZS_0 {
  color: #fff;
  font-size: 0.24rem;
  padding: 0.013333rem 0;
  padding: 0.133333vw 0;
  position: relative;
  color: transparent;
  white-space: nowrap;
}

.logo-statusTipText_1Dx4kZS_0:after {
  content: attr(content);
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  font-size: 0.1024rem;
  font-size: 0.48rem;
  color: #fff;
  padding: 0.00568rem 0;
  padding: 0.0568vw 0;
  padding: 0.026667rem 0;
  padding: 0.266667vw 0;
  white-space: nowrap;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.logo-statusTipSmall_3tjsgtJ_0 {
  font-size: 0.213333rem;
}

.logo-newShop_PI2TWde_0 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 0.853333rem;
  width: 8.533333vw;
  height: 0.853333rem;
  height: 8.533333vw;
  background-image: -webkit-linear-gradient(
    315deg,
    #26ce61,
    #26ce61 50%,
    transparent 0
  );
  background-image: linear-gradient(
    135deg,
    #26ce61,
    #26ce61 50%,
    transparent 0
  );
  font-size: 0.24rem;
}
.logo-newShop_PI2TWde_0 span {
  position: absolute;
  top: 0.133333rem;
  top: 1.333333vw;
  left: 0.026667rem;
  left: 0.266667vw;
  display: block;
  color: #fff;
  font-weight: 700;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.logo-categoryQuantity_uaoPHzl_0 {
  position: absolute;
  right: -0.186667rem;
  right: -1.866667vw;
  top: -0.186667rem;
  top: -1.866667vw;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ff7416),
    color-stop(98%, #ff3c15)
  );
  background-image: -webkit-linear-gradient(right, #ff7416, #ff3c15 98%);
  background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
  border-radius: 0.2rem;
  border-radius: 2vw;
  font-size: 0.266667rem;
  font-weight: 700;
  text-align: center;
  min-width: 0.373333rem;
  min-width: 3.733333vw;
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
  line-height: 0.373333rem;
  line-height: 3.733333vw;
}
.delivery-delivery_3gyT50e_0 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.delivery-icon-delivery_2nSP7AC_0,
.delivery-icon-hollow_3q8_B5r_0 {
  position: relative;
  padding: 0 0.04rem;
  padding: 0 0.4vw;
  color: transparent;
  white-space: nowrap;
  font-size: 0.266667rem;
  border: 0.013333rem solid transparent;
  border: 0.133333vw solid transparent;
  border-radius: 0.04rem;
  border-radius: 0.4vw;
  line-height: 1.2;
}
.delivery-icon-delivery_2nSP7AC_0:after,
.delivery-icon-hollow_3q8_B5r_0:after {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  white-space: nowrap;
  content: attr(content);
  font-size: 0.113773rem;
  font-size: 0.533333rem;
  padding: 0 0.011373rem;
  padding: 0 0.113733vw;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  border-radius: 0.017067rem;
  border-radius: 0.170667vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.delivery-icon-delivery_2nSP7AC_0:after {
  color: #0097ff;
  border: 0.013333rem solid #0097ff;
  border: 0.133333vw solid #0097ff;
}
.delivery-icon-hollow_3q8_B5r_0:after {
  color: #fff;
  border: 0.013333rem solid #0097ff;
  border: 0.133333vw solid #0097ff;
  background-image: -webkit-linear-gradient(45deg, #0085ff, #0af);
  background-image: linear-gradient(45deg, #0085ff, #0af);
}
.delivery-icon-hollow_3q8_B5r_0 {
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
}
.mini-tag-tag_3Tm_6bw_0 {
  position: relative;
  font-size: 0.266667rem;
  color: transparent;
  white-space: nowrap;
}
.mini-tag-ghost_3DwLU8E_0 {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  font-size: 0.533333rem;
}
.mini-tag-ghost_3DwLU8E_0,
.NoDataTip-wrapper_1Gwf0tm {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.NoDataTip-wrapper_1Gwf0tm {
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.NoDataTip-wrapper_1Gwf0tm img {
  display: block;
  width: 5.333333rem;
  width: 53.333333vw;
}
.NoDataTip-wrapper_1Gwf0tm h3 {
  margin: 0.333333rem 0 0.266667rem;
  margin: 3.333333vw 0 2.666667vw;
  color: #6a6a6a;
  font-weight: 400;
  font-size: 0.453333rem;
}
.NoDataTip-wrapper_1Gwf0tm p {
  margin: 0 0 0.333333rem;
  margin: 0 0 3.333333vw;
  color: #999;
  font-size: 0.306667rem;
}
.NoDataTip-wrapper_1Gwf0tm button {
  padding: 0.266667rem;
  padding: 2.666667vw;
  min-width: 3.2rem;
  min-width: 32vw;
  border: none;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-color: #56d176;
  color: #fff;
  text-align: center;
  font-size: 1.2em;
  font-family: inherit;
}
.NoDataTip-wrapper_1Gwf0tm.NoDataTip-fixed_3gTgcHC {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8866;
  padding: 0 0 10%;
  width: 100%;
  height: 100%;
  background: #fff;
}
.LoadMore-wrapper_3WFhfHy {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 1.066667rem;
  min-height: 10.666667vw;
  background-color: #fff;
  color: #666;
  font-size: 0.32rem;
}
.LoadMore-loading_1ZyT4BS {
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
.LoadMore-loading_1ZyT4BS,
.LoadMore-loading_1ZyT4BS:after {
  width: 0.085333rem;
  width: 0.853333vw;
  width: 0.4rem;
  width: 4vw;
  height: 0.085333rem;
  height: 0.853333vw;
  height: 0.4rem;
  height: 4vw;
  border-radius: 100%;
  border: 0.008533rem solid #eee;
  border: 0.085333vw solid #eee;
  border: 0.04rem solid #eee;
  border: 0.4vw solid #eee;
}
.LoadMore-loading_1ZyT4BS:after {
  content: "";
  position: absolute;
  left: -0.008533rem;
  left: -0.085333vw;
  left: -0.04rem;
  left: -0.4vw;
  top: -0.008533rem;
  top: -0.085333vw;
  top: -0.04rem;
  top: -0.4vw;
  border-top-color: #0089dc;
  -webkit-animation: LoadMore-rotate_vodZFdH 1s linear infinite;
  animation: LoadMore-rotate_vodZFdH 1s linear infinite;
}
@-webkit-keyframes LoadMore-rotate_vodZFdH {
  0% {
    transfrom: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes LoadMore-rotate_vodZFdH {
  0% {
    transfrom: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
html {
  background-color: #fff;
}
body.slide-penetration {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header-left,
.header-right {
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
  color: #fff;
  font-size: 0.426667rem;
}
.header-left svg,
.header-right svg {
  fill: #fff;
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.4rem;
  height: 4vw;
}
.search {
  position: -webkit-sticky;
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0.2rem 0.373333rem;
  padding: 2vw 3.733333vw;
  margin: -0.013333rem 0;
  margin: -0.133333vw 0;
}
.search,
.search:after,
.search:before {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.search:after,
.search:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
}
.search:before {
  top: -1px;
}
.search:after {
  bottom: -1px;
}
.search > .content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 0.96rem;
  height: 9.6vw;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 14px;
}
.search > .content > svg {
  display: inline-block;
  width: 0.426667rem;
  width: 4.266667vw;
  height: 0.426667rem;
  height: 4.266667vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
.search > .content > span {
  font-family: simsun;
}
/* 导航宫格 */
.van-swipe__track {
  overflow: hidden !important;
}
.van-swipe__indicator {
  background: #000 !important;
  opacity: 0.2 !important;
  width: 2.4vw !important;
  height: 0.4vw !important;
  border-radius: 0 !important;
}
.van-swipe__indicator--active {
  opacity: 1 !important;
}
.van-swipe__indicator--active {
  background-color: rgb(254, 113, 0) !important;
}
.index-1ECZ3_0 {
  margin-bottom: 2.133333vw;
  font-size: 0;
  padding: 0 2.666667vw;
}
.index-1y1Q5_0 {
  background: #fff;
}
.index-3xB2N_0 {
  display: flex;
  margin-bottom: 0.8vw;
}
.index-1xT5J_0 {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  padding: 3.2vw 0 0 4vw;
  z-index: 0;
  height: 29.333333vw;
}
.index-1qvN6_0 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1.333333vw;
  color: #333;
}
.index-2W67h_0 {
  font-size: 14px;
  color: #777;
  margin-bottom: 2.4vw;
}
.index-1DFa7_0 {
  font-size: 13px;
  color: #af8260;
  font-weight: 700;
}
.index-Q3GS5_0 img {
  max-width: 100%;
  position: absolute;
  bottom: -2vw;
  top: 2.4vw;
  right: 3.733333vw;
  width: 37.6vw;
  height: 25.066667vw;
}
.index-3eoZ-_0 {
  height: 10.666667vw;
  margin-bottom: 1.066667vw;
  border-radius: 0.533333vw;
  background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
  background-size: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 2.666667vw 0 4vw;
  color: #644f1b;
  font-size: 0.293333rem;
}
.index-3M-d6_0 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.index-1QvOZ_0 {
  width: 4.533333vw;
  height: 4.533333vw;
  margin-right: 2vw;
  max-width: 100%;
}
.index-M9mXY_0 {
  font-size: 14px;
  font-weight: 700;
}
.index-tO6Fz_0:before {
  content: "\B7";
  margin: 0 0.106667rem;
  margin: 0 1.066667vw;
  font-weight: 700;
}
.index-1-R5E_0 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 10.666667vw;
  font-size: 13px;
  color: #644f1b;
}
.index-1-R5E_0:after {
  display: block;
  content: "";
  width: 1.066667vw;
  height: 1.066667vw;
  border-right: 0.266667vw solid #8c632b;
  border-bottom: 0.266667vw solid #8c632b;
  transform: rotate(-45deg);
  margin-left: 1.066667vw;
}
/* 店铺 */
.shoplist-title {
  background-color: #fff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 9.6vw;
  font-size: 16px;
  color: #000;
}
.shoplist-title:before {
  display: block;
  content: "";
  width: 5.333333vw;
  height: 0.266667vw;
  background-color: #999;
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  display: block;
  content: "";
  width: 5.333333vw;
  height: 0.266667vw;
  background-color: #999;
  margin-left: 3.466667vw;
}
.nochanges::after {
  display: none;
}
.xiding {
  position: fixed;
  top: 13.6vw;
  z-index: 99;
  width: 100%;
}
</style>
