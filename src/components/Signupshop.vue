<template>
<div class="signup">
  <form   >
    <h5>STORE REGISTARTION</h5>
    
    <input type="text"  placeholder="Store name" required>
    <input type="text"  placeholder="Owner name" required>
    <input type="number"  placeholder="Phone" required>
    <input placeholder="Password" type="password"  required  >
    <input type="text" placeholder="Locality"  required  >
    <select v-model="district">
      <option selected value="Select District">Select District</option>
      <option value="Villupuram">Villupuram</option>
      <option value="Chennai">Chennai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Salem">Salem</option>
      <option value="Kanyakumari">Kanyakumari</option>
    </select>
    <label>Upload Store image</label>
    <input type="file" placeholder="Store image"  required  >

    <div class="submit">
      <button>Register Store</button>
    </div><br/> 
  </form>
  </div>
</template>
<script>
import { ref} from "vue";
export default{
  name:'Signup',
  setup(){
    let district =ref('Select District')

    
    return{ref,district}
  }

}
 
</script>

<style scoped> 
label{
  text-align: left;
}

form{
    max-height: 400px;
    max-width: 200px;
    margin: -10px auto;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    top:5px;
    max-width:75%;
    float: none;
    margin-bottom: 10px;
     
}
h5{
  font-weight: 400px;
  margin: 40px auto;
  margin-bottom:20px;
}

  input, select,textarea {
    margin-bottom: 12px;
    display: block;
    padding: 12px 7px;
    width: 100%;
    box-sizing:border-box;
    border: none;
    border-bottom: 2px solid rgb(43, 0, 59);
    color: rgb(44, 44, 44);
    border-radius: 13px;
     
  }
 input,select,textarea:focus {
    outline:none;
     
}
  button {
    border-radius: 20px;
	border: 1px solid #000000;
	background-color: #000000;
	color: #FFFFFF;
	font-size: 12px;
    cursor:pointer;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  }
button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}


  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style> 