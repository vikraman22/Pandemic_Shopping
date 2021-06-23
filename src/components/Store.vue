<template> 
 <div class="row row-cols-1 row-cols-md-3 g-4" >
  <div class="col" >
    <div class="card">
     
     <img src="../assets/shop.jpg"  class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">  </h5>
        <p class="card-text"><i class="fas fa-map-marker-alt"></i>  Locality - district</p>
         

        <div v-if="showno" >
        <p class="card-text"><i class="fas fa-mobile-alt"></i> Mobile</p>
        </div>
        <button class="leftbtn" @click="gototab('Additem')"><i class="fas fa-hand-pointer"></i> SHOP</button>   <button @click="toggleno"><i class="fas fa-phone-alt"></i> CONTACT</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {ref} from 'vue' 
import { useRouter } from 'vue-router';
export default { 
name : 'Store',
  setup () {
    let showno =ref(false)
   const router = useRouter()
   const gototab = tab =>{
     router.push({ name : tab})
   }
    const toggleno = () =>{
     showno.value = !showno.value
   }
   return{ gototab,toggleno,showno }
   
  },

}
</script>

<style scoped>

button {
  border-radius: 12px;
   border: 1px solid #0090C1;
  background-color: #0090C1;
  box-shadow: 200px;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
.leftbtn{
  
 
  padding: 8px 22px;
  
 
}
button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}
.card-title{
   text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
}
.card{
  background: #f1faee;
}
img{
  padding:2px;
}
  </style>
