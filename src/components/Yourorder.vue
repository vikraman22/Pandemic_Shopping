<template>
   <div v-if="!documents">
    <img src="../assets/noorder.jpg">
      <br><br><br><br>
    <h2 style="font-weight:bold;color:grey;">Whoops!! No order found </h2>
   
   </div>
   <div v-else>
     <h3>YOUR ORDER</h3>
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
        <tr class="table-success" v-for="(i, index) in documents"  :key="i"  >
          <th scope="row">{{ index  }}</th>
          <td>{{ i.item }}</td>
          <td>{{ i.quan }}</td>
          <td>{{ i.unit }}</td>
          
        </tr>
      </tbody>
    </table>

    </div>
 
</template>

<script>
import getYourOrder from "../Composable/getYourOrder";

export default {
  name: "Yourorder",
  setup() {
    const { error, documents } = getYourOrder();
    //let noorder = ref(false)

    if (documents.value) {
      console.log(documents.value);
    }

    return { error, documents };
  },
};
</script>

<style>
</style>