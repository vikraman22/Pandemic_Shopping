<template>
  <div class="form">
    <h5>ADD ITEMS</h5><br>
    <Label>Item name &nbsp;&nbsp; </Label>
    <input required v-model="item" type="text" />
    <Label>&nbsp;&nbsp;Quantity&nbsp;&nbsp;</Label>
    <input required v-model="quan" type="number" />
    <Label>&nbsp;&nbsp;Unit&nbsp;&nbsp;</Label>
    <select required v-model="unit" type="text">
      <option class="Kg">Kg</option>
      <option class="Grams">Grams</option>
      <option class="Nos">Nos</option>
    </select>
    <br /><br />
    <button @click="additem">Add item</button>
  </div>
<br>
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
      <tr class="table-primary" v-for="(it,index) in items" :key="it">
        <th scope="row">{{ it.index }}</th>
        <td>{{ it.item }}</td>
        <td>{{ it.quan }}</td>
        <td>{{ it.unit }}</td>
        <td> <button class="btn" @click="removeitem(index)"> &nbsp;Remove <i class="fas fa-times-circle">&nbsp;</i></button> </td>
      </tr>
    </tbody>
  </table>
  <button >SUBMIT</button>
</template>

<script>
export default {
  name: "Additem",
  data() {
    return {
       index:1,
      item: "",
      quan: "",
      unit: "Kg",
      items: [],
    };
  },
  methods: {
    additem() {
      if (this.item == "" || this.quan == "") {
        alert("Must Include Details");
      } else {
        this.items.push({
          index: this.index,
          item: this.item,
          quan: this.quan,
          unit: this.unit,
        });
        (this.item = ""),
          (this.quan = ""),
          (this.unit = "Kg")
          this.index=this.index+1
           
      }
    },

    removeitem(index){
      this.items.splice(index,1);
      this.index=this.index-1
       
  }
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
button.btn{
  padding:4px;
  border-radius: 30px;
  background: rgb(0, 0, 0);
   border:none;
   color:rgb(255, 255, 255);
   text-transform: none;
}
button.btn:hover{
  padding:4px;
     background: rgb(248, 44, 44);
   border:none;
   color:#000000;
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
  outline:none;
  background:#cfe2ff;
  
}
 
select {
  border-radius: 15px;
  padding: 5px 10px;
}
</style>