<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md m-0 p-0" v-bind:class=" { 'navbarOpen': show }">
        <a class="navbar-brand text-white mx-2" href="#">
            <!-- <i class="fab fa-pied-piper-alt"></i> -->
            <router-link to="/">
                <span class="dropdown-item">Vue App</span>
            </router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown" v-show="myUsername">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Search
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link to="/secure">
                            <span class="dropdown-item">Go To Secure</span>
                        </router-link>
                        <router-link to="/signUp">
                            <a class="dropdown-item">sign Up</a>
                        </router-link>

                    </div>
                </li>
            </ul>
            <!-- <router-link class="nav-link" active-class="active text-white" to="/signUp">
                <button class="btn btn-sm btn-outline-light" v-show="!myUsername">Sign Up</button>            
            </router-link>
             <router-link class="nav-link" active-class="active text-white" to="/login">
                <button class="btn btn-sm btn-outline-light" v-show="!myUsername">login</button>            
            </router-link>-->
            <router-link to="/login" v-on:click.native="logout()" replace>
                <button class="btn btn-sm btn-outline-light mr-3" v-show="myUsername">Logout</button>
            </router-link>
        </div>
    </nav>
</template>
<script>
export default{
    name:"Navbar",
    props: {
       myUsername: Boolean
   },
   data() {
            return {
                show: false,
                
            }
   },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    },
      logout() {
          this.$parent.authenticated = false;
      }
  }

}

</script>