vue
<template>
  <div>
    <h1>Primeur</h1>
    <ul>
      <ProduitComponent
        @send-data="getQte(produit.prix, $event)"
        v-for="(produit, indice) in produits"
        :produit="produit"
        :key="produit.nom"
      />
    </ul>
  </div>
  <div>Total Panier : {{ total }}</div>
  <input placeholder="nom" type="text" v-model="produit.nom" required />
  <input placeholder="prix" type="number" v-model="produit.prix" required />
  <input placeholder="qte" type="number" v-model="produit.quantite" required />
  <button @click="addProduit">Ajouter un produit</button>
</template>

<script>
import ProduitComponent from "../components/ProduitComponent.vue";

export default {
  components: {
    ProduitComponent,
  },

  data() {
    return {
      produits: [
        { nom: "banane", prix: 3, quantite: 10 },
        { nom: "fraise", prix: 10, quantite: 20 },
        { nom: "poivron", prix: 5, quantite: 10 },
      ],
      produit:{
        nom: '',
        quantite: null,
        prix: null,
      },
      total: 0,
    };
  },

  methods: {
    addProduit() {
      this.produits.push(this.produit);
      this.produit = {};
    },

    getQte(prix, eventData){
      this.total += eventData*prix;
    }
  },
};
</script>

<style></style>
