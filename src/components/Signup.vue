<template>
  <div class="signup">
    <form @submit.prevent="onSubmit">
      <h5>CUSTOMER REGISTARTION</h5>
      <input
        type="email"
        v-model="email"
        placeholder="Email address"
        required />
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="number" v-model="mobile" placeholder="Phone" required />

      <input
        placeholder="Password"
        v-model="password"
        type="password"
        required
      />

      <input type="text" v-model="locality" placeholder="Locality" required />

      <select v-model="district">
        <option value="Select District">Select District</option>
        <option value="Villupuram">Villupuram</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Salem">Salem</option>
        <option value="Kanyakumari">Kanyakumari</option>
      </select>

      <textarea
        type="text"
        v-model="address"
        placeholder="Address"
        required
      ></textarea>

      <div class="submit">
        <button >Create an Account</button>
      </div>
      <br />
    </form>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import postSignupCustomer from '../Composable/postSignupCustomer.js'
/* import axios from 'axios'; */
export default defineComponent({
  name: "Signup",
  setup() {
     const { error, signup } = postSignupCustomer()

    const router = useRouter();
    const email = ref('')
    const name = ref('')
    const mobile = ref('')
    const password = ref('')
    const locality = ref('')
    const district = ref('Select District')
    const address = ref('')
    
    const onSubmit = async () => {
       
      const res = await signup(email.value,
      name.value,mobile.value,password.value,
      locality.value,district.value,address.value);
      if (!error.value) {
        alert("Account Registered Sucessufully")
        router.go();
        return res
      } else {
        error.value = "Registration haven't completed";
      }
    }
    return {
      ref,
      onSubmit,
      error , email, name, mobile, password, 
      locality, district, address,
    };
  },
});
</script>

<style scoped>
form {
  max-height: 400px;
  max-width: 200px;
  margin: -20px auto;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  top: 40px;
  max-width: 75%;
  float: none;
  margin-bottom: 10px;
}
h5 {
  font-weight: 400px;
  margin: 40px auto;
  margin-bottom: 20px;
}

input,
select,
textarea {
  margin-bottom: 18px;
  display: block;
  padding: 12px 7px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgb(43, 0, 59);
  color: rgb(44, 44, 44);
  border-radius: 13px;
}
input,
select,
textarea:focus {
  outline: none;
}
button {
  border-radius: 20px;
   border: 1px solid #0090C1;
  background-color: #0090C1;
  box-shadow: 200px;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
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
  border-color: #ffffff;
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