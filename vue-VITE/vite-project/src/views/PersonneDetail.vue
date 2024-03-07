<template>
  <h1>Détail de la personne {{ this.id }}</h1>
  <ul>
    <li>Nom: {{ this.personne.nom }}</li>
    <li>Prenom: {{ this.personne.prenom }}</li>
    <li>Age: {{ this.personne.age }}</li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      personne: [
      ],
    };
  },

  props:{
    id: String
  },

  mounted(){
    axios
      .get(`${this.BASE_URL}/personnes/${this.id}`)
      .then(res => this.personne = res.data)
      .catch(err => this.$router.push({name:"not-found"}))
  }
};
</script>

<style></style>
