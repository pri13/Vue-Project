import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"

Vue.use(VueRouter)


export default new VueRouter({
    routes:[
    {
        path: '/',
        redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
      path: "/signUp",
      name: "signUp",
      component: ()=>import("../views/signUp.vue") 
  },
    {
        path: "/secure",
        name: "secure",
        component: SecureComponent
    }
]
})