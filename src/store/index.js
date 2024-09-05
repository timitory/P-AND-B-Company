// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'

import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
// import baseURL from "@/main"
import router from "../router/index"
import { CHANGE_LOADER } from './storeconstant';
// import vehicle from "./modules/vehicle"
// import home from "./modules/homecontent"
// import health from "./modules/health"
// import chiclaim from "./modules/claims/chiclaim"
// Vue.use(Vuex)

const store= createStore({
  modules:{},
  state: {
    ShowLoader:false,
    showSuccess: false,
    showError: false,
    addAddress : false,
    errorMsg: 'Error',
    successMsg: 'Success',
    userState: '',
    plateVehicleForm: false,
    coverType: '',
    botActivation: false,
    user: {},
    vehicle_category_id: '',
    payment_frequency_id: '',
    underwriter_id: '',
    underwriters: [],
    home_plan_id: '',
    enrollee: {},
    beneficiaries: [],
    beneficiary: {},
    beneficiaryCount: '',
    dependants: [],
    view: '',
    vehicleQuote: {},
    vehicleQuoteInfo: {},
    vehicleInfo: {},
    collapse: false,
    homeCollapse: false,
    activeModal : 0,
    travelDetails: {},
    travelPremfium: {},
    travelId: 0,
    coverforms: 1,
    ratings: 0,
    reviewmodal: false,
    userdata: {},
    autocheck: {},
    virtualAccount: {},
    plans:[],
    planType: false,
  },
  mutations: {
    // startLoading(state,payload){
    //   state.loading  = payload
    // },
    // endLoading(state,payload){
    //   state.loading  = payload
    // },
    [CHANGE_LOADER](state,payload){
      state.ShowLoader=payload;
    },
    setBeneficiaries(state, payload){
      state.beneficiaries = payload
    },
    startPlateVehicleForm(state, payload){
      state.plateVehicleForm  = payload;
    },
    setPlansTypes(state, payload){
      state.planType  = payload;
    },
    setCoverType(state, payload){
      state.coverType  = payload;
    },
    setPlans(state, payload){
      state.plans  = payload;
    },
    setBotActivation(state, payload){
      state.botActivation  = payload;
    },
    setBeneficiary(state, payload){
      state.beneficiary = payload
    },
    setHomePlanId(state, payload){
      state.home_plan_id = payload
    },
    setVehicleCategoryId(state, payload){
      state.vehicle_category_id = payload
    },
    setPaymentFrequencyId(state, payload){
      state.payment_frequency_id = payload
    },
    setUnderwriterId(state, payload){
      state.underwriter_id = payload
    },
    setDependants(state, payload){
      state.dependants = payload
    },
    setEnrollee(state, payload){
      state.enrollee = payload
    },
    setRating(state, payload){
      state.ratings = payload
    },
    setReviewmodal(state, payload){
      state.reviewmodal = payload
    },
    setVirtualAccount(state, payload){
      state.virtualAccount = payload
    },
    changeview(state, val){
      state.view = val
    },
    toggleCollapse(state){
      state.collapse = !state.collapse
    },
    toggleHomeCollapse(state){
      state.homeCollapse = !state.homeCollapse
    },
    setCollapse(state, value){
      state.collapse = value
    },
    setHomeCollapse(state, value){
      state.homeCollapse = value
    },
    setCoverForm(state, payload){
      state.coverforms = payload
    },
    //Set a notice for an active modal to disable scrolling
    setActiveModal(state, val){
      state.activeModal = val
    },
    setSuccess(state, payload){
      state.showSuccess = payload.status
      state.successMsg = payload.msg
    },

    setError(state, payload){
      state.showError = payload.status
      state.errorMsg = payload.msg
    },
    setUser(state, obj){
      state.user = obj
    },
    loginUser(state){
      state.userState = 'logged in'
    },
    logoutUser(state){
      state.userState = ''
    },
    saveQuote(state, payload){
      state.vehicleQuote = payload
    },
    saveVehicleInfo(state, payload){
      state.vehicleInfo = payload
    },
    saveVehicleQuote(state, payload){
      state.vehicleQuoteInfo = payload
    },
    
    saveTravelDetails(state, payload){
      state.travelDetails = payload
    },
    saveTravelId(state, payload){
      state.travelId = payload
    },
    saveTravelPremium(state, payload){
      state.travelPremium = payload
    },

    setUserData(state, payload){
      state.userdata = payload
    },
    setAutoCheckData(state, payload){
      state.autocheck = payload
    },
    // to keep track of where the user is coming from in order to redirect them back after adding address
    addAddress(state, val){
      state.addAddress = val
      console.log(state.addAddress)
    },
    setUnderwriters(state, val){
      state.underwriters = val
    }
  },
  actions: {
    registerUser({commit}, user){
      console.log('This is from the vuex:',user)
      return new Promise((resolve, reject)=> {
        commit('startLoading')
        axios({url: `${baseURL}/signup`, data: user, method: 'POST'})
        .then((res)=> {
          commit('endLoading')
          resolve(res)
        })
        .catch((err)=>{
          commit('endLoading')
          reject(err.response)
        })
      })
    },
    loginUser({commit}, user){
      return new Promise((resolve, reject)=> {
        axios({url: `${baseURL}/login`, data: user, method: 'POST'})
        .then((res)=>{
          commit('loginUser')
          commit('setUser', res.data.data)
          //Store the token in localstorage
          const token = res.data.data.token
          localStorage.setItem('user-token', token) 
           //Set the authorization header for future API calls
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          resolve(res)
        })
        .catch((err)=>{
          commit('endLoading')
          reject(err.response)
        })
      })
    },
    
    logoutUser({commit}){
      return new Promise((resolve)=>{
        setTimeout(()=> {
          commit('logoutUser')
          localStorage.removeItem('user-token')
          localStorage.clear()
          // remove the axios default header
          delete axios.defaults.headers.common['Authorization']
          resolve()
        }, 2000)
      })
    },
    getDependants({commit}){
      return new Promise((resolve, reject)=>{
        axios.get(`${baseURL}/dependants`)
        .then(res=>{
          commit('setDependants', res.data.data)
          resolve()
        })
        .catch(err=>{
          reject(err.response)
        })
      })
    },
    handleError({commit, dispatch}, err){
      if(err.response.data.message == "Invalid or expired JWT"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }else if(err.response.data.message == "Missing or malformed JWT"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }else if(err.response.data.message == "Session expired"){
        commit('setError', {status: true, msg: 'Session expired'})
        commit('endLoading')
        dispatch('logoutUser')
        router.push('/login')
      }
      else if(err.response.data.message == "no record found"){
        commit('endLoading')
        return
      }
      else if(err.response.data.message == "no records found"){
        commit('endLoading')
        return
      }
      else if(err.response.data.message == "empty voice recorded"){
        commit('setError', {status: true, msg: "empty voice recorded"})
        commit('endLoading')
        return
      }
      else if(err.response.data.message){
        commit('endLoading')
        commit('setError', {status: true, msg: err.response.data.message})
      }else{
        commit('endLoading')
        commit('setError', {status: true, msg: "An error occured"})
      }
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
})
export default store
