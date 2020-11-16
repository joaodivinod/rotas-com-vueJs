import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio.vue'
import Usuario from  './components/usuario/usuario.vue'

Vue.use(Router)

export default new Router({
    routes:[{
        path:'/',
        component: Inicio
    },{
        path: '/usuario',
        component: Usuario
    }]
})