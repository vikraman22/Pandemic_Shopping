<template>
   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer name</h5>
        <p class="card-text">customer address</p><br><br><br><br><br><br><br>
        <button @click="gototab('Vieworder')">View Order</button>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer name</h5>
        <p class="card-text">customer address</p><br><br><br><br><br><br><br>
        <button @click="gototab('Vieworder')">View Order</button>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer name</h5>
        <p class="card-text">customer address</p><br><br><br><br><br><br><br>
        <button @click="gototab('Vieworder')">View Order</button>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer name</h5>
        <p class="card-text">customer address</p><br><br><br><br><br><br><br>
        <button @click="gototab('Vieworder')">View Order</button>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer name</h5>
        <p class="card-text">customer address</p><br><br><br><br><br><br><br>
        <button @click="gototab('Vieworder')">View Order</button>  </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer name</h5>
        <p class="card-text">customer address</p><br><br><br><br><br><br><br>
        <button @click="gototab('Vieworder')">View Order</button>  </div>
    </div>
  </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name:'Vieworder',
    setup () {
   const router = useRouter()
   const gototab = tab =>{
     router.push({ name : tab})
   }
   return{ gototab }
}
}
</script>

<style>
.card{
   padding: 2px;
   background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  width: 300px;
  height: 340px;
  box-shadow: 20px;
  border-color: rgb(0, 0, 0);
  background: #f5f5f5;
 }
 .card-title{
     background: black;
     padding:7px;
     color:white;
     border-radius: 5px;
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