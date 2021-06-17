<template> 
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="../assets/shop.jpg" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">SHOP NAME</h5>
        <p class="card-text">Shop Address</p>
        <button @click="gototab('Additem')">SHOP</button>    <button>CONTACT</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 
import { useRouter } from 'vue-router';
export default { 
name : 'Store',
  setup () {
   const router = useRouter()
   const gototab = tab =>{
     router.push({ name : tab})
   }
   return{ gototab }
   
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
