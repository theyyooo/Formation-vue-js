<template>
  <HeaderComponent></HeaderComponent>
  <MenuNav></MenuNav>
  <router-view></router-view>
</template>

<script>
import MenuNav from "./components/MenuNav.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  name: "App",

  components: {
    MenuNav,
    HeaderComponent
  },
};
</script>

<style scoped>
</style>
