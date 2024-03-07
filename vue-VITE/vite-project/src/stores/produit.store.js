import { defineStore } from "pinia";

export const useProduitStore = defineStore('produits', {
    state() {
        return {
            lignesCommandes: []
        }
    },
    getters: {
        nombreArticles(state) {
            return state.lignesCommandes.length
        },
        quantiteTotaleCommandee(state) {
            return state.lignesCommandes
                .map(lc => lc.quantiteReservee)
                .reduce((p, c) => p + c, 0)
        }
    },

    actions:{
        supprimerArticle(nom){
            this.lignesCommandes = this.lignesCommandes.filter(elt=>elt.produit.nom != nom)
        }
    }
})