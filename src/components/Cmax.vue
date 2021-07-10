<template>
  <div class="row row-cols-1 row-cols-md-3 g-4" >
  <div v-for="i in orderedUsers" :key="i.id">
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header"  style="font-weight:bold;">ORDER DETAILS</div>
      <div class="card-body text-dark">
      
        <p class="card-text" style="font-weight:bold;">
          <img src="../assets/more.jpg"  class="card-img-top"><br>
           No of items - {{i.totalItems}}
        </p>
          <p class="card-title" style="font-size:12px;">UserID - {{i.userId}}</p>
          <div class="card-footer bg-transparent border-success"><Button>View order</Button></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { projectAuth } from "../Firebase/config";
import getCorders from "../Composable/getViewcorder"
export default {
  name: "Cmax",
  setup(){
      
    let user = projectAuth.currentUser;
    //console.log("in uswr of min page", user);
    const { error, orderedUsers } = getCorders(false, user.email)
    
    return { error, orderedUsers }
  }
};
</script>

<style scoped>
Button{
  color:white;
  background-color:green;
  border-radius: 4px;
  text-transform: uppercase;
}
</style>