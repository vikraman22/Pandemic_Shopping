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
        class="btn btn-outline-primary"
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
      <label class="btn btn-outline-primary" @click="toggleview" for="btnradio2"
        ><div class="text">MAXIMUM&nbsp;ORDER</div></label
      >
    </div>
  </div>

  <!-- min & max -->
<div v-if="viewmin">  <Tmin/> </div>
<div v-else> <Tmax/></div>
 


</template>

<script>
import {ref} from 'vue'
import Tmin from '../components/Tmin.vue'
import Tmax from '../components/Tmax.vue'
export default {
  name: "Temporder",
  components:{Tmin,Tmax},
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