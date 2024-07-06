<template>
   <div class="container my-3">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12 col-xs-12">
                <div class="card shadow-lg  my-5 rounded border border-light">
                      <div>
                        <img class="avatar" src="../assets/avatar.jpeg" alt="avatar">
                    </div>
                    <div class="card-body my-5">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h4 class="font-weight-bold text-success">Sign Up</h4>
                                <hr />
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div>
                                    <label class="text-secondary">Username</label>
                                    <input type="text" class="form-control" placeholder="Username"
                                           v-model="registration.userName" required autofocus>
                                </div>
                                <div>
                                    <label class="text-secondary">Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password"
                                           v-model="registration.confirmPassword" required>
                                </div>
                                <div>
                                    <label class="text-secondary">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password"
                                          v-model="registration.confirmPassword" required>
                                </div>
                                <button class="my-3 btn btn-sm btn-success btn-block" 
                                        type="submit"  @click="signUp()">
                                      Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-success text-white">
                        <span>Already Have Account. Click
                           <router-link v-bind:to="'/login'">
                               <a class="text-white" href="#">Here</a>
                           </router-link>
                           <span> to Login</span> 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    export default{
       name:"signup" ,
        data() {
            return {
                registration: {
                    userName: "",
                    password: "",
                    confirmPassword: ""
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
    background:#28a745!important;
    padding: 8px;
    box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
} 

</style>