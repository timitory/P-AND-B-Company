<template>
    <div class="flex">
        <div class="flex justify-center items-center">
            <div class="flex flex-row justify-center items-center py-28 px-80">
                <form @submit.prevent="validateForm" class="flex flex-col justify-center items-center space-y-7">
                    <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                    <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                    <div class="flex flex-row justify-center items-center space-x-6">
                        <div class="mt-4 lg:mt-6">
                            <label class="text-dark font-semibold">First Name Only*</label>
                            <input type="text" placeholder="Enter First Name" v-model="user.firstname" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" >
                            <p v-if="error.firstname" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                          </div>
                          <div class="mt-4 lg:mt-6">
                              <label class="text-dark font-semibold">Last Name Only*</label>
                              <input type="text" placeholder="Enter Last Name" v-model="user.lastname" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" >
                              <p v-if="error.lastname" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                            </div>
                    </div>
                    <div class="flex flex-row justify-center items-center space-x-6">
                        <div class="mt-4">
                            <label class="text-dark font-semibold">Email Address  *</label>
                            <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" >
                            <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                          </div>
                          <div class="mt-4">
                              <label class="text-dark font-semibold">Phone Number  *</label>
                              <input type="text" placeholder="09022474543" v-model="user.phone" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" >
                              <p v-if="error.phone" class="text-danger text-sm mt-2">Please enter a valid Phone Number</p>
                            </div>
                    </div>
                    <div class="w-full">
                        <div class="mt-4">
                            <label class="text-dark font-semibold">Company Name *</label>
                            <input type="text" placeholder="Tato CO. LTD" v-model="user.company_name" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" >
                            <p v-if="error.company_name" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                          </div>
                    </div>
                    
                    
                    <!-- <p class="text-red-500 mt-4">{{errorMsg}}</p> -->
                     <div class="">
                        <label class="flex text-dark font-semibold text-xl text-start py-2">What do you need help with?  *</label>
                        <div class="flex justify-between w-full">
                            <div class="flex flex-col space-y-2 text-balance justify-start items-start text-dark">
                                
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.branding" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Branding</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.webdesign" ref="checkbox" class="p-3 w-11" >
                                    <label class="text-dark font-semibold">Web Design</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.development" ref="checkbox" class="p-3 w-11" >
                                    <label class="text-dark font-semibold">Web Development</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.logoDesign" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Logo Design</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.printdesign" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Print Design</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.design1" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Design</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.designing" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Designing</label>
                                </div>
                                
                                
            
                            </div>
                            <div class="flex flex-col justify-center space-y-2 items-start text-balance text-dark">
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.content" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Content Marketing</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.email_marketing" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Email Marketing</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.seo" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">SEO</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.any_design" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Any Design</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.product_design" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Product Design</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.product_launch" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Product Launch</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.product_management" ref="checkbox" class="p-3 w-11">
                                    <label class="text-dark font-semibold">Product Management</label>
                                </div>
                                
                                
            
                            </div>
                            <div class="flex flex-col  space-y-2 text-balance justify-start items-start text-dark">
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.event_management" ref="checkbox" class="p-3 w-11" >
                                    <label class="text-dark font-semibold">Event Design Management</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.social_media" ref="checkbox" class="p-3 w-11" >
                                    <label class="text-dark font-semibold">Social Media/Digital Campaigns</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.others" ref="checkbox" class="p-3 w-11" >
                                    <label class="text-dark font-semibold">Others</label>
                                </div>
                                <!-- <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                                    <label class="text-dark font-semibold">Last Name *</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                                    <label class="text-dark font-semibold">Last Name *</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                                    <label class="text-dark font-semibold">Last Name *</label>
                                </div>
                                <div class="flex space-x-3">
                                    <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                                    <label class="text-dark font-semibold">Last Name *</label>
                                </div> -->
                                
                                
            
                            </div>
                            
                        </div>
                        <div class="flex flex-col mt-4 py-5">
                            <p class="text-sm text-dark"><label for="message">Would love to give us a brief on what you want?</label></p>
                            <textarea name="message" id="message" cols="30" rows="10" class="flex w-full  bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" placeholder="Your message.............."></textarea>
                        </div>

                        <div>
                            <div class="lg:w-full mt-4 lg:mt-0">
                                <label class="text-sm font-bold">What's Your Budget Range?</label>
                                <div class="relative">
                                  <select name="lang"  v-model="budget_range"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    required>
                                    <option value="select">Select Language</option>
                                    <option value="Tayo">Tayo</option>
                                    <option value="Bukky">Bukky</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                  </select>
                                  <!-- <p  class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p> -->
                                </div>
                              </div>
                              <div class="lg:w-full mt-4 lg:mt-4">
                                <label class="text-sm font-bold">How did you hear about us?</label>
                                <div class="relative">
                                  <select name="lang"  v-model="news"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    required>
                                    <option value="select">Select Language</option>
                                    <option value="Tayo">Tayo</option>
                                    <option value="Bukky">Bukky</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                  </select>
                                  <!-- <p  class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p> -->
                                </div>
                              </div>
                        </div>
                        <div class="flex justify-center items-center space-x-6">
                            <div class="lg:w-full mt-4 lg:mt-4">
                                <label class="text-sm font-bold">Country *</label>
                                <div class="relative">
                                  <select name="lang"  v-model="budgetcount"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    required>
                                    <option value="select">Select Language</option>
                                    <option value="Tayo">Tayo</option>
                                    <option value="Bukky">Bukky</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                  </select>
                                  <!-- <p  class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p> -->
                                </div>
                              </div>
                              <div class="lg:w-full mt-4 lg:mt-4">
                                <label class="text-sm font-bold">City *</label>
                                <div class="relative">
                                  <select name="lang"  v-model="budgetcity"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    required>
                                    <option value="select">Select Language</option>
                                    <option value="Tayo">Tayo</option>
                                    <option value="Bukky">Bukky</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                    <option value="Kayode">Kayode</option>
                                  </select>
                                  <!-- <p  class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p> -->
                                </div>
                              </div>
                        </div>
                        
                     </div>

                    <button class="mt-6 rounded focus:outline-none bg-dark py-2 text-center w-full text-white">Proceed</button> 
                  </form>
            </div>
        </div>
    </div>
</template>
<script>
import { CHANGE_LOADER } from '@/store/storeconstant';
import { mapMutations } from 'vuex';

export default{
    data(){
        return {
      showEye: true,
      user: {
        email: "",
        password: "",
        email_marketing:'',
        event_management:'',
        any_design:'',
        budget_range:'',
        branding:'',
        checkbox:'',
        designing:'',
        development:'',
        firstname:'',
        lastname:'',
        logoDesign:'',
        password:'',
        budgetcity:'',
        budgetcount:'',
        news:'',
        phone:'',
        product_design:'',
        product_launch:'',
        product_management:'',
        seo:'',
        webdesign:'',
        
      },
      error:{
            password: false,
            email: false,
        }
    }
},
computed:{
    email(){
        return this.user.email
    },
    phone(){
        return this.user.phone
    }
},
watch:{
    phone(){
            if(/^\d{11}$/.test(this.user.phone)){
                this.error.phone = false;
            }else{
                this.error.phone = true;
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
      console.log('Contact US Info:',this.user)
      this.$router.push('/confirmcontact')
      this.$store.dispatch('ContactUS', this.user)
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
}
}
</script>