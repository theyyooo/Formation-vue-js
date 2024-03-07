<template>
    <h1>Adresse</h1>
    <li>Rue = {{ adress.rue }}</li>
    <li>Ville = {{ adress.ville }}</li>
    <button @click="ajouter">Voulez vous ajouter une nouvelle personne?</button>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const adress = computed(()=>{
    return route.query;
})
const ajouter = () => {
    router.push({name: 'personne'})
}
</script>

<style></style>