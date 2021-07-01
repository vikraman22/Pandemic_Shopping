<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
<i class="fas fa-user" ></i> 
      <h5>CUSTOMER LOGIN</h5>

      <input
        type="email"
        placeholder="Email address"
        v-model="email"
        required
      />

      <input
        placeholder="Password"
        @keypress="check"
        v-model="password"
        type="password"
        required
      />
      <div v-if="error" class="error">{{ error }}</div>
      <div class="submit">
        <button>LOGIN</button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import checkLoginCustomer from "../Composable/checkLoginCustomer.js";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const { error, login } = checkLoginCustomer();
    const email = ref("");
    const password = ref("");
    const onSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        router.push('/CustomerHome');
        return res;
      }
    };

    return { onSubmit, email, password, error, ref };
  },
};
</script>


<style scoped>
form {
  max-height: 400px;
  max-width: 200px;
  margin: 190px auto;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  top: 0px;
  position: relative;
  max-width: 75%;
  float: none;
  margin-bottom: 10px;
}
h5 {
  font-weight: 400px;
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