<template>
 <div class="row row-cols-1 row-cols-md-3 g-4" v-if="stores">
  <div class="col" v-for="i in stores" :key="i.id">
    <div class="card">
      <!--img src="../assets/shop.jpg" class="card-img-top" -->
      <div class="card-body">
        <h5 class="card-title">{{i.storename}}</h5>
        <p class="card-text">{{i.district}}</p>

        <div v-if="showno">
        <p class="card-text">{{i.mobile}}</p>
        </div>
        <button @click="gototab('Additem')">SHOP</button>   <button @click="toggleno">CONTACT</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 import getShopInfo from "../Composable/getShopInfo"
import {ref} from 'vue' 
import { useRouter } from 'vue-router';
export default {
name:"Chome",
setup(){

  const { error, stores } = getShopInfo()

  //console.log(stores);

   let showno =ref(false)
   const router = useRouter()
   const gototab = tab =>{
     router.push({ name : tab})
   }
    const toggleno = () =>{
     showno.value = !showno.value
   }
   return{ gototab,toggleno,showno, stores, error  }
}

}
</script>

<style>

</style>