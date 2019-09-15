<template>
  <div id="app">
    <div id="main">
      <div data-reactroot id="indexContainer" class="indexContainer withHeader ">
        <Header @tipshow="tipshowok"></Header>
        <div>
          <Nav @mainshow="mainshowok"></Nav>
          <span></span>
          <Main v-if="mainbool[0]"></Main>
          <Main2 v-if="mainbool[1]"></Main2>
          <Main3 v-if="mainbool[2]"></Main3>
          <Main4 v-if="mainbool[3]"></Main4>
          <Main5 v-if="mainbool[4]"></Main5>
          <Main6 v-if="mainbool[5]"></Main6>
          <Main7 v-if="mainbool[6]"></Main7>
          <Main2 v-if="mainbool[7]"></Main2>
          <Main5 v-if="mainbool[8]"></Main5>
          <Main6 v-if="mainbool[9]"></Main6>
          <Main7 v-if="mainbool[10]"></Main7>
          <Main2 v-if="mainbool[11]"></Main2>
        </div>
      </div>
    </div>
    <Tips @tipshow="tipshowok" v-if="tipbool"></Tips>
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Main4 from "./components/Main4";
import Main5 from "./components/Main5";
import Main6 from "./components/Main6";
import Main7 from "./components/Main7";
import Tips from "./components/Tips";

export default {
  name: "app",
  components: {
    Header,
    Nav,
    Main,
    Main2,
    Main3,
    Main4,
    Main5,
    Main6,
    Main7,
    Tips
  },
  data() {
    return {
      tipbool: false,
      mainbool: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    tipshowok(msg) {
      this.tipbool = msg;
    },
    mainshowok(index) {
      this.mainbool = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.mainbool[index] = 1;
    }
  }
};
</script>

<style>
</style>
