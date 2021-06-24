<template>
   <div v-if="noorder">

    <img src="../assets/noorder.jpg">
    <br><br><br><br>
    <h2 style="font-weight:bold;color:grey;">Whoops!! No order found </h2>
   </div>
   <div  v-else>
     <h2>Yourorder</h2>
      <table class="table">
    <thead>
      <tr class="table-dark">
        <th scope="col">No</th>
        <th scope="col">Item</th>
        <th scope="col">Quantity</th>
        <th scope="col">Unit</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-success" >
        <th scope="row">index</th>
        <td>item</td>
        <td>quan</td>
        <td>unit</td>
      </tr>
    </tbody>
  </table>
 
   </div>

</template>

<script>
import { ref } from 'vue'
export default { 
  name:'Yourorder',
  setup(){
    let noorder = ref(true)

    return{noorder}
  }


}
</script>

<style>
 
</style>