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
              <th scope="col">No</th>
              <th scope="col">Item</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-success" v-for="(i, index) in documents" :key="i">
              <th scope="row">{{ index }}</th>
              <td>{{ i }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  </div>

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
</template>

<script>
import getNotify from "../Composable/getNotify";
import { ref } from "vue";
export default {
  name: "Notification",
  setup() {
    let noorder = ref(false);
    const { error, documents } = getNotify();

    return { noorder, error, documents };
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