<template>
  <div id="app">
    <Header></Header>
    <TopNav></TopNav>
    <Banner></Banner>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TopNav from "./components/TopNav.vue";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Header,
    TopNav,
    Banner
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
body {
  font-family: "Inter", sans-serif;
}
</style>
