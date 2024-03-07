import AboutView from "../views/AboutView.vue";
import PrimeurComponent from "../views/PrimeurComponent.vue";
import ReactiveValue from "../views/ReactiveValue.vue";
import CompteurView from "../views/CompteurView.vue";
import PaysComponent from "../views/PaysComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import AdressView from "../views/AdressView.vue";
import PersonneView from "../views/PersonneView.vue";
import PersonneDetail from "../views/PersonneDetail.vue";
import CalculeView from "../views/CalculeView.vue";
import TableauView from "../views/TableauView.vue";
import NotFoundVue from "../views/NotFound.vue";    
import PanierView from "../views/PanierView.vue";

const routes = [
    {
        path: '/', 
        //component : HomeView,
        // Pour avoir un load plus rapide
        // mais pas bon pour le referencement
        component : () => import("../views/HomeView.vue"),
        name: 'home',
        alias: ['/accueil', '/home']
    },
    {
        path: '/about', 
        component : AboutView,
        name: 'about',
        meta: { title: 'À propos' }
    },
    {
        path: '/reactive', 
        component : ReactiveValue,
        name: 'reactive'
    },
    {
        path: '/pays', 
        component : PaysComponent,
        name: 'pays'
    },
    {
        path: '/primeur', 
        component : PrimeurComponent,
        name: 'primeur'
    },
    {
        path: '/adresse', 
        component : AdressView,
        name: 'adresse'
    },
    {
        path: '/personne', 
        component : PersonneView,
        name: 'personne'
    },
    {
        path: '/person', 
        redirect: 'personne'
    },
    {
        path: '/personne/:id', 
        component : PersonneDetail,
        name: 'personne-detail',
        props: true
    },
    {
        path: '/calcule', 
        component : CalculeView,
        name: 'calcule'
    },
    {
        path: '/compteur', 
        component : CompteurView,
        name: 'compteur'
    },
    {
        path: '/panier', 
        component : PanierView,
        name: 'panier'
    },
    {
        path: '/calcule/:operation', 
        component : CalculeView,
        name: 'calcule'
    },
    {
        path: '/tableau/:id', 
        component : TableauView,
        name: 'tableau',
    },
    {
        path: '/not-found', 
        component : NotFoundVue,
        name: 'not-found',
    },
    {
        path: '/:pathMatch(.*)', 
        redirect: '/not-found'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'lien-actif'
})

router.beforeEach((to, from)=>{
    document.title = to.meta.title || 'Vue.js 3'
})

export default router;