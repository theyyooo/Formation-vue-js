<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/primeur">Primeur</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/pays">Pays</router-link> | 
    <router-link to="/reactive">Reactive View</router-link> | 
    <router-link to="/adresse">Adresse</router-link> |
    <router-link to="/personne">Personne</router-link> |
    <router-link to="/calcule">Calcule</router-link> |
    <router-link to="/tableau/0">Tableau</router-link> |
    <router-link to="/compteur">Compteur (API Composition)</router-link> |
    <router-link to="/panier">Panier</router-link> 
    Article dans le panier {{ produitStore.nombreArticles }}
  </nav>
</template>

<script setup>
import { useProduitStore } from '../stores/produit.store.js';

const produitStore = useProduitStore()

</script>

<style scoped>
.lien-actif{
  color: tomato;
}
</style>
