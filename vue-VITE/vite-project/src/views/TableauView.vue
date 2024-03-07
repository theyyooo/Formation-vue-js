<template>
  <h1>Balade sur les chiffres d'un tableau</h1>
  <RouterLink :to="{name: 'tableau', params:{id: previous}}">Previous</RouterLink>
  <p>Value : {{ numbers[index] }}</p>  
  <RouterLink :to="{name: 'tableau', params:{id: next}}">Next</RouterLink>
  <button @click="suivant">suivant</button>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      numbers: [2, 3, 4, 5, 6],
    };
  },

  methods:{
    suivant(){
        this.router.push({path: '/tableau', params:{id:this.next}})
    }
  },

  computed:{
    index(){
        return Number(this.$route.params.id);
    },
    next(){
        const indice = Number(this.id)+1;
        return indice == this.numbers.length ? 0 : indice
    },
    previous(){
        const indice = Number(this.id)-1;
        return indice < 0 ? this.numbers.length - 1 : indice
    }
  }
};
</script>

<style></style>
