import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"

//Tell Vue to use the router
Vue.use(VueRouter)

//Export the router
export default new VueRouter({
    routes:[
    {
        path: '/',
        redirect: {
            name: "login" // This is the default route
        }
    },
    {// this is the route for the login component
        path: "/login",
        name: "login",
        component: LoginComponent// this is the component that will be loaded when the route is called
    },
    {
      path: "/signUp",
      name: "signUp",
      component: ()=>import("../views/signUp.vue")  //Lazy loading
  },
    {
        path: "/secure",
        name: "secure",
        component: SecureComponent
    }
]
})