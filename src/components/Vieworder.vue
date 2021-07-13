<template>
  <div id="app">
     
     <div v-if="document">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <label class="form-checkbox">
              <input type="checkbox" v-model="selectAll" @click="select" />
              <i class="form-icon"></i> clear
            </label>
          </th>

          <th>Item name</th>
          <th>Quantity</th>
          <th>Unit</th>
        </tr>
      </thead>
     
      <tbody>
      
        <tr v-for="i in document.orderedItems" :key="i">
          <td>
            <label class="form-checkbox">
              <input type="checkbox" :value="i" v-model="selected" />
              <i class="form-icon"></i>
            </label>
          </td>

          <!--  -->
           
          <td>{{ i.item }}</td>
          <td>{{ i.quan }}</td>
          <td>{{ i.unit }}</td>
        </tr>
     
      </tbody>
     
    </table>  
  </div>
    <label><b>Enter bill amount for available items *</b></label
    >&nbsp;&nbsp;
    <input
      required
      type="number"
      placeholder="Bill amount"
      v-model="bill"
    /><br /><br />
    <button @click="send_avail">Send</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import getViewitems from "../Composable/getViewitems"
import { projectFirestore, projectAuth } from '../Firebase/config'

export default {
  name: "Vieworder",

  props: ["id"],

  setup(props) {
    const router = useRouter();
    let bill = ref("");
    let selected = ref([]);
    let selectAll = ref(false);
    const { error, document } = getViewitems(props.id)

    const select = () => {
      selected.value = [];
      if (!selectAll.value) {
        for (let i in props.list.value) {
          selected.value.push(props.list.value[i].item);
        }
      }
    };

    //sent avail

    const send_avail = async () => {
      let user = projectAuth.currentUser;
      await projectFirestore.collection("notify").add({
        availitems: selected.value,
        bill: bill.value,
        store: user.email,
        OrderDocId: props.id,
        userId: document.value.userId ,
        userName: document.value.userName
      });
      alert("Response has sent");
       router.push('/Store/Temporaryorder');
      
    };
    return { error, document, send_avail, selected, selectAll, select, bill };
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