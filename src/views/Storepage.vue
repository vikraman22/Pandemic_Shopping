<template>
<nav class="navbar navbar-dark bg-dark" >
  <!-- Navbar content -->
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand " style="position:relative;right:70px;"
       href="#" @click="gototab('Storehome')" ><i class="fas fa-home"></i> HOME</a>
      <a class="navbar-brand " style="position:relative;right:-250px;"
       href="#" @click="gototab('Temporder')" ><i class="fas fa-hourglass-start"></i> Temporary Orders</a>
      <a class="navbar-brand " style="position:relative;right:-300px;"
       href="#" @click="gototab('Confirmorder')" ><i class="fas fa-check-double"></i> Confirmed Orders</a>
    
      <a class="navbar-brand" style="position:relative;right:-600px;"
       href="#" @click="gototab('Storeprofile')"><i class="fas fa-user"></i> Profile</a>
       

    </div>
  </nav>
</div>
</nav>
<div class="content">
<router-view/>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: "Storehome",
  setup () {
     const router = useRouter()
   const gototab = tab =>{
     router.push({ name : tab})
   }
   return{ gototab }
      
  }
}
</script>
 <style scoped>
.content{

  margin-right: auto; /* 1 */
  margin-left:  auto; /* 1 */
  top:60px;
  position:relative;
  max-width: 960px; /* 2 */
  padding-right: 10px; /* 3 */
  padding-left:  10px; /* 3 */
}
</style>