<template>
  <div id="app">
    <Header></Header>
    <TopNav></TopNav>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TopNav from "./components/TopNav.vue";

export default {
  name: "App",
  components: {
    Header,
    TopNav
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
body {
  font-family: "Inter", sans-serif;
}
</style>
