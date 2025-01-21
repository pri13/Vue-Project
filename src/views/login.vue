<template>
    <!-- we are using Boostrap 4 library for below-->
    <!--creating a container which centers the div block content -->
    <div class="container my-3" id="login">
        <!--creating a row which centers the div block content 
        This is Flex CSS Model-->
        <div class="row justify-content-center">
            <!--creating column that will take half width of the container
            on large screen, full width on medium and small screens.-->
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="card shadow-lg my-5 rounded border border-light" style="border:3px;">
                    <div>
                        <img class="avatar" src="../assets/avatar.jpeg" alt="avatar">
                    </div>
                    <div class="card-body my-5">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h4 class="font-weight-bold text-primary">Login</h4>
                                <hr />
                            </div>
                        </div>
                         <div class="row" v-show="input.isError">
                            <div class="col-12 text-center"> 
                                <div class="alert alert-danger">
                                    <div class="row">
                                        <div class="col-lg-1 col-sm-12">
                                            <font-awesome-icon :icon="['fas','exclamation-triangle']"  />          
                                        </div>
                                        <div class="col-lg-11 col-sm-12 text-center">
                                            <span>username and/or password you entered is incorrect.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div>
                                    <label class="text-secondary">Username</label>
                                    <input type="text" class="form-control" placeholder="Username" name="username"
                                        v-model="input.username">
                                </div>
                                <div>
                                    <label class="text-secondary">Password</label>
                                    <input type="password" class="form-control" name="password" v-model="input.password"
                                        placeholder="Password">
                                </div>
                                <div class="checkbox">
                                    <label class="text-secondary">
                                        <input type="checkbox">
                                        Use Refresh Tokens
                                    </label>
                                </div>
                                <button class="btn btn-sm btn-primary btn-block" type="submit" v-on:click="login()">
                                    Login 
                                    <font-awesome-icon :icon="['fas','sign-in-alt']" size="lg" />          
                                    <!-- <font-awesome-icon icon="spinner" inverse />              -->
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-primary text-white">
                        <span>Not Registed, Click
                            
                         <router-link v-bind:to="'/signUp'">
                            <a class="text-white" href="#">Here</a>
                         </router-link>  
                        </span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            // This is the data that will be used in the component
            // for Double binding
            return {
                input: {
                    username: "",
                    password: "",
                    isError: false
                }
            }
        },
        methods: {
            login() {

                this.input.isError = false;

                if(this.input.username != "" && this.input.password != "") {
                    var serviceBase = 'http://localhost:49864/';
                    var data = "grant_type=password&username=" + this.input.username + "&password=" + this.input.password;

                    // This is the call to the API that will return the token
                 
                    // The token is then used to authenticate the user
                    // The user is then redirected to the secure page
                    this.$http.post(serviceBase + 'token', data,
                                     { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(result => {
                      // The token is then stored in local storage
                        localStorage.setItem('authorizationData', 
                        JSON.stringify({token: result.data.access_token, userName:this.input.username }))
                        //Send back to the parent component that the user is authenticated
                        this.$emit("authenticated", true);
                        // Redirect to the secure page
                        this.$router.replace({ name: "secure" });

                    } , error => {
                        console.error(error);
                        this.input.isError =true;
                    });

                } 
                else {
                    console.log("A username and password must be present");
                    this.input.isError =true;
                }
            }
        },
        
    }
</script>
<style scoped>
.avatar{
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -45px;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    z-index: 9;
    background: #007bff;
    padding: 8px;
    box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
} 

</style>