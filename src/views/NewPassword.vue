<template>
    <div class="w-full px-96 py-11">
        <div class="flex flex-col w-full  shadow-lg rounded-lg bg-white p-8">
             <div class="flex flex-col text-left justify-start text-balance">
                  <p class="text-2xl font-bold text-dark">Create New Passsword</p>
                  <p class="text-2xl font-bold text-violet"></p>
                  
             </div>
             <form @submit.prevent="validateForm" class="w-full">
                <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                
                <div class="mt-4 lg:mt-6 rounded w-full relative">
                  <label class="text-dark font-semibold">New Passsword *</label>
                  <input type="password" placeholder="***********" v-model="user.password" ref="password" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                  <p v-if="error.password" class="text-red-500 text-sm mt-2">Please enter a valid Passsword</p>
                  <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
                  <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
              </div>
                
                               
                
                <button class="mt-6 rounded focus:outline-none bg-dark py-2 text-center w-full text-white">Create Password</button>
               <h1 class="inline-block mt-6 text-center rounded focus:outline-none text-sm py-2 w-full text-dark"><router-link to="/forgotpassword" class="text-violet">Go Back</router-link></h1> 
              </form>
        </div>
     </div>
   </template>
   <script>
export default {
    data(){
     return {
        showEye: true,
        user:{
            password:""
        },
        confirm: "",
        error:{
            password: false,
           
        }
     }   
    },
    computed:{
        password(){
            return this.user.password
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
        // confirm(){
        //     if(this.confirm !== this.user.password){
        //         this.error.confirm = true
                
        //     }else{
        //         this.error.confirm = false
        //     }
        // }
    },
    methods:{
        showPassword(){
            this.$refs.password.type = 'text'
            
            this.showEye = false
        },
        hidePassword(){
            this.$refs.password.type = 'password'
            this.showEye = true
        },
        validateForm(){
            console.log(this.user)

            if(Object.values(this.error).includes(true)){
                return
            }else{
                // console.log(this.user)
             this.$store.commit('updateUserPassword', this.user)
             this.$router.push('/login')  
            }
        }
    }
}
</script>

<style scoped>
.greent{
  color: #2CB675
}
.blue-bg{
  background-color: #E2F5EC;
}
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
}
</style>
