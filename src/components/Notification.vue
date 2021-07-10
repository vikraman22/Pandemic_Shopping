<template>
  <div v-if="noorder">
    <h2 style="font-weight: bold; color: grey">
      You have 0 Notification .. Wait somemore time
    </h2>
    <img src="../assets/noti.png" />
    <br /><br />
  </div>
  <div v-else>
    <div v-if="hide">
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Available items in your list</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
      <center>
        <p class="bill">Bill amount for Available Items - {{}}</p>
      </center>
      <br /><br />

      <button
        type="button"
        class="btn btn-secondary accept"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Note : It will confirm your order"
      >
        ACCEPT
      </button>
      <button
        type="button"
        class="btn btn-secondary decline"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Note : It will Cancel your current order"
      >
        DECLINE
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Notification",
  setup() {
    let hide = ref(true);
    let noorder = ref(false);

    return { noorder, hide };
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
.bill {
  background-color: powderblue;
  padding: 20px 20px;
  width: 50%;
  height: 50%;
  font-weight: bold;
}
</style>