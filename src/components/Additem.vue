<template>
  <div class="form">
    <h5>Create Your List</h5>
    <br />
    <Label>Item name &nbsp;&nbsp; </Label>
    <input required v-model="item" type="text" />
    <Label>&nbsp;&nbsp;Quantity&nbsp;&nbsp;</Label>
    <input required v-model="quan" type="number" />
    <Label>&nbsp;&nbsp;Unit&nbsp;&nbsp;</Label>
    <select required v-model="unit" type="text">
      <option class="kg">kg</option>
      <option class="grams">grams</option>
      <option class="nos">nos</option>
      <option class="litre">litre</option>
      <option class="ml">ml</option>
    </select>
    <br /><br />
    <button @click="additem"><i class="fas fa-plus-circle"></i> Add item</button>
  </div>
  <br />
  <div v-if="showlist == true">
    <table class="table">
      <thead>
        <tr class="table-dark">
          <th scope="col">No</th>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit</th>
          <th scope="col">Remove Item</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-primary" v-for="(it, index) in items"  :key="it"  >
          <th scope="row">{{ index+one }}</th>
          <td>{{ it.item }}</td>
          <td>{{ it.quan }}</td>
          <td>{{ it.unit }}</td>
          <td>
            <button class="btn" @click="removeitem(index)">
              &nbsp;Remove <i class="fas fa-times-circle">&nbsp;</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addItemFbFunc">
      <i class="fas fa-check-circle"></i> SUBMIT
    </button>
  </div>
  <div v-else>
    <h3 style="color:crimson;"> <i class="fas fa-cart-plus"></i>  Add atleast one item!</h3>
  </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../Firebase/config";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Additem",

  setup() {
    let one = 1
    let showlist = ref(false);
    let items = ref([]);
    let item = ref("");
    let quan = ref("");
    let unit = ref("kg");
    let index = ref(1);
    const router = useRouter();

    const additem = () => {
      showlist.value = true;
      if (item.value == "" || quan.value == "") {
        alert("Must Include Details");
      } else {
        items.value.push({
          index: index.value,
          item: item.value,
          quan: quan.value,
          unit: unit.value,
        });
        (item.value = ""), (quan.value = ""), (unit.value = "kg");
        
      }
    };

    const removeitem = (index) => {
      items.value.splice(index, 1);
      
    };

    const addItemFbFunc = async () => {
      let user = projectAuth.currentUser;
      await projectFirestore.collection("orders").doc(user.uid).set({
        orderedItem: items.value,
      });
      alert("Your Order has Sent ");
      router.push("/CustomerHome");
    };

    return {one,
      removeitem,
      additem,
      addItemFbFunc,
      showlist,
      items,
      item,
      quan,
      unit,
      index,
    };
  },
};
</script>

<style scoped>
button {
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
button.btn {
  padding: 4px;
  border-radius: 30px;
  background: rgb(0, 0, 0);
  border: none;
  color: rgb(255, 255, 255);
  text-transform: none;
}
button.btn:hover {
  padding: 4px;
  background: rgb(248, 44, 44);
  border: none;
  color: #000000;
}
label,
h5 {
  font-size: 20px;
  font-weight: bold;
}
input {
  border-radius: 15px;
}
input:focus {
  outline: none;
  background: #cfe2ff;
}

select {
  border-radius: 15px;
  padding: 5px 10px;
}
</style>