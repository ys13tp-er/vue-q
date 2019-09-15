<template>
  <div id="app">
    <!-- <Home /> -->
    <!-- <transition name="bounce"> -->

    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
// import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    // Home
  }
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>
