<template>
  <div id="app">
    <Header />
    <Search />
    <Panel />
    <Tabbar />
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
import Panel from "./components/Panel";
import Tabbar from "./components/Tabbar";
export default {
  name: "app",
  components: {
    Header,
    Search,
    Panel,
    Tabbar
  }
};
</script>

<style>
</style>
