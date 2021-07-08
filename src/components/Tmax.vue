<template>
  <div class="row row-cols-1 row-cols-md-3 g-4" >
    <div v-for="i in orderedUsers" :key="i.id">
    <div class="card border-danger mb-3" style="max-width: 18rem">
      <div class="card-header">Customer Name</div>
      <div class="card-body text-danger">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
          <div class="card-footer bg-transparent border-success"><Button>View order</Button></div>
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

    const { error, orderedUsers } = getOrders(false, user.email)
    
    return { error, orderedUsers }
  }
};
</script>

<style>
</style>