<template>
  <div id="app">
    <Header></Header>
    <TopNav></TopNav>
    <Banner></Banner>
    <Projects></Projects>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TopNav from "./components/TopNav.vue";
import Banner from "./components/Banner.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    TopNav,
    Banner,
    Projects,
    Footer
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
body {
  font-family: "Inter", sans-serif;
}
</style>
