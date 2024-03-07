<template>
  <h2>Value received : {{ pays }}</h2>
    <HelloWorld ville="Lyon" @send-data="getData" ref="child">
      <template #nom> John</template>
      <template v-slot:prenom>Wick</template>
    </HelloWorld >
    <RouterLink :to="{name: 'adresse', query:{rue: 'prado', ville:'Marseille'}}">Visiter Marseille</RouterLink>
  </template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },

  data() {
    return {
      pays: null,
    }
  },

  methods:{
    getData(value){
      this.pays = value;
    }
  },

  mounted(){
    console.log(this.$refs.child.msg);
  }
}
</script> 

<style lang="">
    
</style>