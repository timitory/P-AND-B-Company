<template>
  <div v-if="ShowLoader" class="loader">
    <div class="lds-hourglass"></div>
      <div class="text-center px-2">{{ text }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default{
    props:{
        text:{
            required:false,
            type:String,
            default:'Loading...'

        }
    },
    computed:{
        ...mapState({
            ShowLoader:(state)=>state.ShowLoader
            
        })
    }

}
</script>

<style scoped>
.loader{
    position: fixed;
    top: 30%;
    width: 20%;
    margin:auto;
    background: #fff;
    box-shadow: 0px 0px 9px -2px #000;
    z-index: 999;
    left: 0;
    right:0;
    text-align: center;
    padding: 2px;
}


.lds-hourglass,
.lds-hourglass:after {
  box-sizing: border-box;
}
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid currentColor;
  border-color: currentColor transparent currentColor transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>