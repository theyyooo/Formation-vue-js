<template>
  <h1>Gestion des personnes</h1>
  <ul>
    <li v-for="elm in personnes" :key="elm.id">{{ elm.prenom }} {{ elm.nom }}
     
      <router-link :to="{ name: 'personne-detail', params: { id: elm.id } }">Détails</router-link>
      <button @click="supprimer(elm.id)">Supprimer</button>
    </li>
  </ul>
  <PersonneAdd @send-data="updateList"></PersonneAdd>
</template>

<script>
import { RouterLink } from 'vue-router';
import PersonneAdd from '../components/PersonneAdd.vue';
import PersonneAddNew from '../components/PersonneAddNew.vue';
import axios from 'axios';

export default {
  components: {
    PersonneAdd,
    PersonneAddNew
  },

  data() {
    return {
      personnes: [

      ],
    };
  },

  methods:{
    updateList(obj){
      this.personnes.push(obj);
    },

    supprimer(id){
      axios
      .delete(`${this.BASE_URL}/personnes/${id}`)
      .then(() => {
        const indice = this.personnes.findIndex(elt=>elt.id == id)
        this.personnes.splice(indice, 1)
      })
    }
  },

  created() {
    /*     axios({
          methods:'GET',
          url: 'http://localhost:5555/personnes'
        }) */
    axios
      .get(`${this.BASE_URL}/personnes`)
      .then(res => this.personnes = res.data)
  }
};
</script>

<style></style>
