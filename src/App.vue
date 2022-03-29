<template>
  <HeaderPage />

  <router-link to="/"> </router-link>
  <router-view></router-view>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-shadow: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  /* background-color: rgba(112, 128, 144, 0.452); */
}
</style>
