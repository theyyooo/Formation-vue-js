<template>
    <li>
        {{ produit.nom }} --- {{ produit.quantite }} --- {{ produit.prix }}€
        <input type="number" placeholder="quantité ?" v-model="qteReservee">
        <button :disabled="submitted" @click="ajouter">Ajouter dans le panier</button>
    </li>
</template>

<script setup>
import { ref } from 'vue'
import { useProduitStore } from '../stores/produit.store.js';

const produitStore = useProduitStore();

const qteReservee = ref(null)
const submitted = ref(false)

const props = defineProps({
    produit: {
        nom: String,
        quantite: Number,
        prix: Number
    }
})
const emit = defineEmits(['sendData'])
const ajouter = () => {
    emit('sendData', qteReservee.value)
    submitted.value = true
    produitStore.lignesCommandes.push({
        qteReservee: qteReservee.value,
        produit: props.produit

    })
}


</script>

<!-- <script>
export default {
    props: {
        produit:{
            nom : String,
            prix: Number,
            quantite: Number
        }
    },

    data() {
        return {
            qte: 0,
        }
    },

    methods:{
        addToPanier(){
            this.$emit("qte", this.qte);
        }
    },

    emits:[
        "qte"
    ]
};
</script> -->

<style></style>
