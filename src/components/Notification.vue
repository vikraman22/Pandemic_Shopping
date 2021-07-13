<template>
  <div v-if="!documents">
    <h2 style="font-weight: bold; color: grey">
      You have 0 Notification .. Wait somemore time
    </h2>
    <img src="../assets/noti.png" />
    <br /><br />
  </div>
  <div v-else>
    <h4 class="alert-heading" style="color: crimson; font-weight: bold">
      Available items in your list
    </h4>
    <center>
      <div class="content">
        <table class="table">
          <thead>
            <tr class="table-dark">
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in documents[0].availitems" :key="i">
              <td>{{ i.item }}</td>
              <td>{{ i.quan }}</td>
              <td>{{ i.unit }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  
  <div v-for="j in documents" :key="j">
    Bill amount for available items - {{ j.bill }}
  </div>
  <br /><br />

  <button
    type="button"
    @click="accept"
    class="btn btn-secondary accept"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Note : It will confirm your order"
  >
    ACCEPT
  </button>
  <button
    type="button"
    @click="decline"
    class="btn btn-secondary decline"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Note : It will Cancel your current order"
  >
    DECLINE
  </button>
  </div>
</template>

<script>
import getNotify from "../Composable/getNotify";
import deleteOrder from "../Composable/delete";
import declineOrder from "../Composable/decline";
import { ref } from "vue";
export default {
  name: "Notification",
  setup() {
    let noorder = ref(false);
    const { error, documents } = getNotify();

    const accept = () => {
      deleteOrder(documents.value);
      alert("Order Confirmed");
      router.push("/CustomerHome");
    };
    const decline = () => {
      declineOrder(documents.value);
      router.push("/CustomerHome");
    };
    return { noorder, error, documents, accept, decline };
  },
};
</script>

<style scoped>
.accept {
  margin: 4px;
  background-color: green;
  color: white;
  box-shadow: white 10px;
  border-color: rgb(0, 128, 57) 2px;
  border-radius: 10px;
  padding: 6px 12px;
}
.decline {
  margin: 4px;
  color: white;
  background-color: red;
  border-color: red;
  border-radius: 10px;
  padding: 6px 12px;
}
.content {
  width: 800px;
  padding: 30px;
}
</style>