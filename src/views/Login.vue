<template>
    <div class="w-full px-96 py-11">
        <div class="flex flex-col w-full  shadow-lg rounded-lg bg-white p-8">
             <div class="flex flex-col text-left justify-start text-balance">
                  <p class="text-2xl font-bold text-dark">Welcome back to</p>
                  <p class="text-2xl font-bold text-violet">Pixels & Brands👏🏽 </p>
                  <div class="text-red-700 text-lg font-bold" v-if="errorMsg">{{ errorMsg }}</div>
                  
             </div>
             <form @submit.prevent="validateForm" class="w-full">
                <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Email Address *</label>
                  <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                  <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                </div>
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Password *</label>
                  <div class="mt-2 bg-white w-full rounded relative">
                    <input type="password" placeholder="Enter Password" v-model="user.password" ref="password" class="w-full py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                    <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
                    <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
                    
                  </div>
                  <p v-if="error.password" class="text-danger text-sm mt-2">Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)</p>
                </div>
                <p class="text-red-500 mt-4">{{errorMsg}}</p>
                <div class="flex justify-between items-center">
                    <div class="flex space-x-3 text-balance text-dark">
                        <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                        <h1>Remember Password</h1>
    
                    </div>
                    <router-link to="/forgotpassword" class="text-violet mt-8 md:mt-0 text-sm">Forgot password?</router-link>
                </div>
                
                <button class="mt-6 rounded focus:outline-none bg-dark py-2 text-center w-full text-white">Proceed</button>
               <h1 class="inline-block mt-6 text-center rounded focus:outline-none text-sm py-2 w-full text-dark">Don't have an account? <router-link to="/signup" class="text-violet">Sign Up</router-link></h1> 
              </form>
        </div>
     </div>
   </template>
   <script>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(faEye, faEyeSlash);
import { CHANGE_LOADER } from '@/store/storeconstant';
import { mapActions, mapMutations } from 'vuex'
// import SignupValidation from '../Services/SignupValidation'
// import {CHANGE_LOADER, LOGIN_ACTION} from '../store/storeconstants'
export default {
  name:'Login',
  components:{
    // FontAwesomeIcon,
  },
  data(){
    return {
      showEye: true,
      user: {
        email: "",
        password: "",
      },
      error:{
            password: false,
            email: false,
        },
      // remember: false,
      errorMsg: ""
    }
  },
  computed:{
    password(){
      return this.user.password
    },
    email(){
      return this.user.email
    }
  },
  watch:{
        password(){
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.user.password)){
                this.error.password = false
            }else{
                this.error.password = true
            }
        },
        email(){
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(re.test(this.user.email)){
                this.error.email = false;
            }else{
                this.error.email = true
            }
        }
      },
  methods:{
    ...mapMutations({
        LoadSpinner:CHANGE_LOADER}
      ),
    validateForm(){
      this.LoadSpinner(true)
      this.$store.dispatch('loginUser', this.user)
      .then(()=>{
        // console.log(res)
        this.LoadSpinner(false)
        this.$router.push('/app')
      })
      .catch(err=>{
        this.errorMsg = err.data.message
        if(err.data.message === 'Please verify account first'){
          this.$router.push('/verifyotp')
          this.$store.commit('setError', {status: true, msg: err.data.message})
        }
        // this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    },
    showPassword(){
      this.$refs.password.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.showEye = true
    }
  },
  created(){
    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  },
  mounted() {
            this.LoadSpinner(false)
        },
//   methods:{
//     ...mapMutations({
//       LoadSpinner:CHANGE_LOADER
//     }),
// ...mapActions('auth',{
//   signup: LOGIN_ACTION,
// }),
//   async Onlogin(){
//       let Validations = new SignupValidation(
//         this.email,
//         this.password,
//       )
//       this.errors=Validations.checkValidations();
//       if('email' in this.errors || 'password' in this.errors){
//         return false
//       }
//       this.error=''
//       this.LoadSpinner(true)
//       try {
//      await this.signup({email:this.email,password:this.password})
//   } catch(error){
//     this.error=error.message
//     this.LoadSpinner(false)
//   }
      
//       this.LoadSpinner(false)
//       if(this.error){
//         return false
//       }
//       else{
//       return this.$router.push('/home')
//       }
//     } 
//   }
  
}
</script>
<style>
.eye{
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 5px;
    cursor: pointer;
    display: inline;
    -ms-display: none
  }
  
</style>