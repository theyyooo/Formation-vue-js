<template>
    <h1>Panier</h1>
    <ul>
        <li v-for='elt in produitStore.lignesCommandes'>
            {{ elt.produit.nom }} - {{ elt.quantiteReservee }} éléments - {{ elt.produit.prix }} €
            <button @click="deleteProduit(elt.produit.nom)">Supprimer</button>
        </li>
    </ul>
</template>

<script setup>
import { useProduitStore } from '../stores/produit.store.js';

var deleteProduit = (nom) => {
    produitStore.supprimerArticle(nom);
}

const produitStore = useProduitStore()
</script>
