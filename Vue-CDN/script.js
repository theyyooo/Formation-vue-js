import HomeView from "./components/HomeView.js"
const app = Vue.createApp({
   components: {
       'home-view': HomeView
   }
})
app.mount('#app')