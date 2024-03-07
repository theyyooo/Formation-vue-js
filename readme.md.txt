*Formation Vue.js 3.4

---

**INTRODUCTION

***Init projet :

-CDN
-VueCLI -> webpack avec babel (traducteur naviguateur)
-VITE (conseillé pour tout type de projet) -> Rollup (pas de traduction)

***extension a avoir : 

-Vue 3 Snippets
-TypeScript Vue Plugin (Volar)

***3 construction différentes pour les composants:

-API Options (objet js)
-API Composition (déclaration déclarative)
	-setup(){}
	-script setup  ----> syntax ref ou reactive

Nommage d'un composant : 2mot en camel minimum

---

**BINDING

unidirectionelle : interpolation; event-binding
bidirectionelle

Pour le partage de données:

de père a fils : slot ou props
de pere à ariere petit fils : provide-inject
de fils a père : emit
de cousin à cousin : gestion d'état: PINA

---

**Choses à savoir


watchEffect analyse les opérendes pour faire un champ calculé

Mettre scoped dans la balise html pour pas que le style se répercute sur les enfants

validation de formulaire: vuelidate;veevalidate

npm compare : site pour comparer des package npm



