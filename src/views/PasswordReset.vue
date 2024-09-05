<template>
    <div class="w-full px-96 py-11">
        <div class="flex flex-col w-full  shadow-lg rounded-lg bg-white p-8">
             <div class="flex flex-col text-left justify-start text-balance">
                  <p class="text-2xl font-bold text-dark">Password Reset</p>
                  <p class="text-2xl font-bold text-violet"></p>
                  
             </div>
             <form @submit.prevent="showNext" class="w-full">
                <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Email Address *</label>
                  <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                  <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                </div>
                               
                
                <button class="mt-6 rounded focus:outline-none bg-dark py-2 text-center w-full text-white">Send Password Reset Link</button>
               <h1 class="inline-block mt-6 text-center rounded focus:outline-none text-sm py-2 w-full text-dark"><router-link to="/login" class="text-violet">Go Back</router-link></h1> 
              </form>
        </div>
     </div>
   </template>
   <script>
    export default {
        name:'Passsword Reset',
        data(){
            return{
                user:{
                    email:'',
                },
                error:{
                    email:false
                }
            }
        },
        computed:{
            email(){
                return this.user.email
            }
        },
        methods:{
        showNext(){
            const data=this.user
            if(Object.values(this.error).includes(true)){
                return
            }else{
                this.$router.push('/passwordinfo')
             this.$store.commit('resetpassword', data)  
            }
            console.log(data)
        }
    },
    
        watch:{
            email(){
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(re.test(this.user.email)){
                this.error.email = false;
            }else{
                this.error.email = true
            }
        }
        }
    }

</script>