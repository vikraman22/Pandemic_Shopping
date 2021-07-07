<template>
  <div class="nav">
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label
        class="btn btn-outline-success"
        @click="togglemin"
        for="btnradio1"
        ><div class="text">MINIMUM&nbsp;ORDER</div></label
      >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-success" @click="toggleview" for="btnradio2"
        ><div class="text">MAXIMUM&nbsp;ORDER</div></label
      >
    </div>
  </div>

  <!-- min & max -->
<div v-if="viewmin">  <Cmin/> </div>
<div v-else> <Cmax/></div>
 


</template>

<script>
import {ref} from 'vue'
import Cmin from '../components/Cmin.vue'
import Cmax from '../components/Cmax.vue'
export default {
  name: "Confirmorder",
  components:{Cmin,Cmax},
  setup() {
     let viewmin =ref(true)
     let viewmax =ref(false)

     const toggleview = () =>{
       viewmin.value =false
       viewmax.value =true
     }
     const togglemin = () =>{
       viewmin.value =true
       viewmax.value =false
     }

     return {toggleview,viewmin,viewmax,togglemin}
  },
};
</script>

<style>
.nav {
  position: relative;
  top: -60px;
  height: 61px;
  width: 976px;
}
.btn {
  padding-right: 320px;
  position: relative;
  color: rgb(0, 0, 0);
}
.text {
  text-align: center;
  position: relative;
  text-align: center;
  top: 12px;
  font-size: 18px;
  left: 140px;
}
</style>