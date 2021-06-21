<template> 
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="../assets/shop.jpg" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">SHOP NAME</h5>
        <p class="card-text">Shop Address</p>

        <div v-if="showno">
        <p class="card-text">Mobile number</p>
        </div>
        <button @click="gototab('Additem')">SHOP</button>   <button @click="toggleno">CONTACT</button>
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
 .card{
   padding: 2px;
   margin: px;
 }
  button {
  border-radius: 10px;
	border: 1px solid #000000;
	background-color: #000000;
	color: #FFFFFF;
	font-size: 14px;
  cursor:pointer;
	font-weight: bold;
	padding: 8px 24px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  } 
  </style>
