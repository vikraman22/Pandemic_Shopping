<template>
  <div id="app">
    <h4>FINAL ORDER DETAILS</h4>
     <div v-if="document">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
           
          <th>Item name</th>
          <th>Quantity</th>
          <th>Unit</th>
        </tr>
      </thead>
     
      <tbody>
      
        <tr v-for="i in document.availitems" :key="i">
           
          <!--  -->
          <td>{{ i.item }}</td>
          <td>{{ i.quan }}</td>
          <td>{{ i.unit }}</td>
        </tr>
     
      </tbody>
    </table>  
    
  </div>
  
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import getcViewitems from "../Composable/getcViewitems";
import { projectFirestore, projectAuth } from "../Firebase/config";

export default {
  name: "ConfirmViewOrder",

  props: ["id"],

  setup(props) {
    const router = useRouter();
    let bill = ref("");
    let time = ref("");
    let date = ref("");

    const { error, document } = getcViewitems(props.id);

    //sent avail

    const sendpickup = async () => {
      let user = projectAuth.currentUser;
      await projectFirestore.collection("pickup").add({
        bill: bill.value,
        store: user.email,
        OrderDocId: props.id,
        time: time.value,
        date: date.value,
        userName: document.value.userName,
      });
      alert("Response has sent");
      router.push("/Store/Confirmorder");
    };
    return { error, document, bill, time, date, sendpickup };
  },
};
</script>

<style scoped>
button {
  border-radius: 10px;
  border: 1px solid #0090c1;
  background-color: #40bcd8;
  box-shadow: 200px;
  color: #000000;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  padding: 6px 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 5px;
  font-size: 14px;
}
button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}
input {
  border-radius: 6px;
}
input:focus {
  background: #ffe4d6;
}
thead {
  background: #ff570a;
  color: white;
  text-transform: uppercase;
}
</style>