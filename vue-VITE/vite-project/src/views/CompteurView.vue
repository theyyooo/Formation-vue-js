<template>
    <h1>Compteur : {{ counter.etat }} </h1>
    <button @click="decrementer">-</button>
    {{ counter.valeur}}
    <button @click="incrementer">+</button>
</template>

<script setup>
import { reactive, onMounted, onUpdated } from 'vue'

// const counter = ref(0)
const compteur = { valeur: 0, etat: 'nul' }
const counter = reactive(compteur)

const incrementer = () => {
    counter.valeur++;
}
const decrementer = () => {
    counter.valeur--;
}

onUpdated(() => {
    if (counter.valeur == 0) {
        counter.etat = 'nul'
    } else if (counter.valeur > 0) {
        counter.etat = 'positif'
    } else {
        counter.etat = 'négatif'
    }
})

// on peut utiliser le hook onUpdated ou un watch
const updateEtat = () => {
    if(counter.valeur > 0){
        counter.etat = "positif";
    }
    else if (counter.valeur < 0){
        counter.etat = "negatif";
    }
    else{
        counter.etat = "nul";
    }
}

onMounted(() => {
    console.log('mounted');
})
</script>

<!-- <script>
import { ref } from 'vue'

export default {
    setup() {
        const counter = ref(0)

        const incrementer = () => {
            counter.value++
        }
        const decrementer = () => {
            counter.value--
        }
        return {
            counter,
            incrementer,
            decrementer
        }
    }

}
</script> -->

<!-- <script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementer() {
            this.counter++
        },
        decrementer() {
            this.counter--
        }
    }
}
</script> -->