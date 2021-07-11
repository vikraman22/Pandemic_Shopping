<template>
  <div class="row row-cols-1 row-cols-md-3 g-4" >
    <div v-for="i in orderedUsers" :key="i.id">
    <div class="card border-danger mb-3" style="max-width: 18rem">
      <div class="card-header"  style="font-weight:bold;">ORDER DETAILS</div>
      <div class="card-body text-dark">
      
        <p class="card-text" style="font-weight:bold;">
          <img src="../assets/few.jpg"  class="card-img-top"><br>
           No of items - {{i.totalItems}}
        </p>
          <p class="card-title" style="font-size:12px;">Customer Name - {{i.userName}}</p>
        <router-link :to="{name: 'Vieworder', params:{id: i.id}}">
          <div class="card-footer bg-transparent border-danger"><Button>View order</Button></div>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { projectAuth } from "../Firebase/config";
import getOrders from "../Composable/getVieworder"
export default {
  name: "Tmax",
  setup(){      
  
    let user = projectAuth.currentUser;

    const { error, orderedUsers } = getOrders(true, user.email)

    /*if(orderedUsers){
    console.log(orderedUsers)
    }*/
    return { error, orderedUsers }
  }
};
</script>

<style scoped>
Button{
  color:white;
  background-color: rgb(255, 37, 37);
  border-radius: 4px;
  text-transform: uppercase;
}
</style>