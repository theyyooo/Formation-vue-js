<template lang="">
  <div>Villes : {{ villes }} {{ cp }}</div>
  <ul>
    <VilleComponent v-for="(ville, indice) in villes" v-model:ville=villes[indice] v-model:cp="cp[indice]"/>
  </ul>
</template>

<script>
import VilleComponent from "../components/VilleComponent.vue";
export default {
  components: {
    VilleComponent,
  },
  data() {
    return {
      villes: ["Lyon", "Marseille", "Paris"],
      cp: ["69000", "13000", "75000"], 
    };
  },

  methods:{
  }
};
</script>

<style lang=""></style>