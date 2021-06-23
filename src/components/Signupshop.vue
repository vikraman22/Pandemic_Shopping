<template>
<div class="signup">
  <form   @submit.prevent="onSubmit">
    <h5>STORE REGISTARTION</h5>
     <input
        type="email"
        v-model="email"
        placeholder="Email address"
        required />
    <input type="text" v-model="storename"  placeholder="Store name" required>
    <input type="text" v-model="ownername" placeholder="Owner name" required>
    <input type="number" pattern="[789][0-9]{9}" v-model="mobile" placeholder="Phone" required>
    <input placeholder="Password" v-model="password" type="password"  required  >
    <input type="text" v-model="locality" placeholder="Locality"  required  >
    <select v-model="district">
      <option selected value="Select District">Select District</option>
      <option value="Villupuram">Villupuram</option>
      <option value="Chennai">Chennai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Salem">Salem</option>
      <option value="Kanyakumari">Kanyakumari</option>
    </select>
    <label>Upload Store image</label>
    <input type="file"  placeholder="Store image" >

    <div class="submit">
      <button>Register Store</button>
    </div><br/> 
  </form>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import postSignupStore from '../Composable/postSignupStore.js'
export default defineComponent({
  name:'Signup',
  setup(){
    const { error, signupstore } = postSignupStore()

    const router = useRouter();
    const email = ref('')
    const storename = ref('')
    const ownername = ref('')
    const mobile = ref('')
    const password = ref('')
    const locality = ref('')
    const district = ref('Select District')
     
    
    const onSubmit = async () => {
      const res = await signupstore(email.value,
      storename.value,ownername.value,mobile.value,password.value,
      locality.value,district.value );
      if (!error.value) {
        alert("Account Registered Sucessufully")
        router.go();
        console.log(res);
      } else {
        error.value = "Registration haven't completed";
      }
    }

    
    return{ref, onSubmit,
      error , email, storename,ownername, mobile, password, 
      locality, district }
  }

})
 
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
 border: 1px solid #0090C1;
  background-color: #0090C1;
  box-shadow: 200px;
   
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