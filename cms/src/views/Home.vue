<template>
  <div class="home">
    <el-container class="outbox">
      <el-aside width="250px">
        <div class="logo">
          <img src="../assets/jiajulogo.png">
          <div class="logotitle">
            <span class="logotitle1">后台管理</span>
            <span class="logotitle2">DEEPSHIFT</span>
          </div>
        </div>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#172850" text-color="#718298" active-text-color="#ffd04b" active-background-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-chat-round"></i>
              <span>公告管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">平台公告</el-menu-item>
              <el-menu-item index="1-2">后台通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>设计案例</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">上架案例</el-menu-item>
              <el-menu-item index="2-2">下架案例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-discount"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-money"></i>
              <span>优质团队</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">团队列表</el-menu-item>
              <el-menu-item index="4-2">退出团队</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="myhearder">
          <el-row type="flex" justify="end">
            <el-col :span="6" class="hdElRow">
              <span class="userinf">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                <span class="username">username</span>
              </span>
              <span class="quit">
                <svg t="1564985915118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2231" width="30" height="30" style="cursor: pointer;">
                  <path d="M1012.580864 550.5024 852.632064 748.9536C834.865664 770.9696 802.660864 774.4 780.644864 756.6336 758.680064 738.8672 755.198464 706.6624 772.964864 684.6464L870.859264 563.2 409.854464 563.2C381.643264 563.2 358.705664 540.2624 358.705664 512 358.705664 483.7376 381.643264 460.8 409.854464 460.8L849.201664 460.8 756.427264 367.9232C736.408064 347.9552 736.408064 315.4944 756.427264 295.5264 776.395264 275.5072 808.753664 275.5072 828.772864 295.5264L1008.894464 475.8016C1013.604864 480.512 1017.342464 486.144 1019.953664 492.4416 1022.820864 499.3024 1023.793664 506.624 1023.486464 513.9968 1024.612864 526.6944 1021.182464 539.8016 1012.580864 550.5024ZM665.700864 204.8C637.438464 204.8 614.552064 181.8624 614.552064 153.6L614.552064 102.4 102.859264 102.4 102.859264 921.6 614.552064 921.6 614.552064 870.4C614.552064 842.1376 637.438464 819.2 665.700864 819.2 693.963264 819.2 716.900864 842.1376 716.900864 870.4L716.900864 921.6C716.900864 978.176 671.076864 1024 614.552064 1024L102.859264 1024C46.334464 1024 0.510464 978.176 0.510464 921.6L0.510464 102.4C0.510464 45.824 46.334464 0 102.859264 0L614.552064 0C671.076864 0 716.900864 45.824 716.900864 102.4L716.900864 153.6C716.900864 181.8624 693.963264 204.8 665.700864 204.8Z" p-id="2232" fill="#bfbfbf"></path>
                </svg>
              </span>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    };
  },
  methods: {
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
}

.outbox {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #e6e6e6;
}

.el-aside {
  background-color: #172850;
  color: #718298;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.hdElRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.userinf {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.username {
  line-height: 40px;
  padding-left: 10px;
}

.quit {
  line-height: 40px;
  height: 30px;
  padding: 5px 55px;
  border-left: 1px solid #cdcdcd;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #474551;
  margin-bottom: 30px;
}

.logo img {
  width: 80px;
  height: 80px;
}

.logotitle {
  display: flex;
  height: 80px;
  width: 100px;
  line-height: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.logotitle1 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  line-height: 40px;
}

.logotitle2 {
  font-size: 19px;
  line-height: 20px;
}
</style>



