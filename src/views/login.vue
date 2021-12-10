<template>
    <div class="container my-3" id="login">
        <div class="row justify-content-center">
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

                    this.$http.post(serviceBase + 'token', data,
                                     { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(result => {

                        localStorage.setItem('authorizationData', 
                        JSON.stringify({token: result.data.access_token, userName:this.input.username }))
                        
                        this.$emit("authenticated", true);
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