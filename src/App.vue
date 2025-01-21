<template>
  <div id="app">
    <div id="nav">
     <navBar :myUsername="authenticated"></navBar>
    </div>
    
    <router-view @authenticated="setAuthenticated" />
  </div>

</template>

<script>
import navBar from "./views/navBar.vue";

export default {
  name: 'App',
  components: {navBar},
  data() {
      return {
          authenticated: false,
      }
  },
  mounted() {
      if(!this.authenticated) {
        var that =this;
          that.$router.replace({ name: "login" });
      }
  },
  methods: {
     // This method is called when the user is authenticated
     // It is called from the login component
      setAuthenticated(status) {
          this.authenticated = status;
      },
    
  }
}
</script>

<style>

</style>
