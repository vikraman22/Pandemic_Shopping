<template>
  <div class="split left">
    
      <h1>WELCOME</h1>
      <p class="lefttext" style="font-size: 20px">
        This Pandemic Shopping Companion is to develop a web application for
        grocery stores to reduce the crowd by pre-ordering the required products
        prior to reaching the store.
      </p>
    </div>
  

  <div class="split right">
    
      <!-- navbar-->
<div class="navi">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid ">
        

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <!-- Left links -->
        <ul class="navbar-nav ms-auto mb-1 mb-lg-0">
            <li class="nav-item" style="padding-right:190px; padding-left:10px;">
            <a class="nav-link" href="#" @click=" togglelogin ">
                <i class="fas fa-user"></i>
                Customer</a>
            </li>
            <li class="nav-item" style="padding-right:200px;">
            <a class="nav-link" href="#" @click=" toggleslogin">
                <i class="fas fa-store"></i>
                Shopkeeper</a>
            </li>
            <li class="nav-item" style="padding-right:50px;">
            <a class="nav-link" href="#" @click=" showabout">
                <i class="fab fa-autoprefixer"></i>
                About</a>
            </li>
            </ul>
     
        <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
    </div>
    </nav>
    </div>
<div class="centered">
    </div>
    <div v-if="showlogin">
      <Login />
      <center>
        <a @click="switchsign" style="cursor: pointer"
          >Haven't Account ? Register
        </a>
      </center>
    </div>

    <div v-if="showsign">
      <Signup />
      <center>
        <a @click="switchlogin" style="cursor: pointer; position: relative">
          <br /><br /><br /><br /> <br><br><br /><br /><br /><br /><br /><br />Already
          user ? Login
        </a>
      </center>
    </div>
    <div v-if="showssign">
      <Signupshop />
      <center>
        <a @click="switchslogin" style="cursor: pointer; position: relative">
           <br><br> <br><br> <br><br><br><br><br> <br><br><br> Already user ? Login
        </a>
      </center>
    </div>

    <div v-if="showslogin">
      <Loginshop />
      <center>
        <a @click="switchssign" style="cursor: pointer"
          >Haven't Account ? Register
        </a>
      </center>
    </div>

    <div v-if="showsabout">
      <About />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Signup from "../components/Signup.vue";
import Signupshop from "../components/Signupshop.vue";
import Login from "../components/Login.vue";
import Loginshop from "../components/Loginshop.vue";
import About from "../components/About.vue";
export default {
  name: "Home",
  components: { About, Signup, Signupshop, Login, Loginshop },
  setup() {
    let tab = ref("");

    let showsabout = ref(false);
    const showabout = () => {
      showsabout.value = true;
      showlogin.value = false;
      showsign.value = false;
      showssign.value = false;
      showslogin.value = false;
    };
    /* switch */
    let showsign = ref(false);
    const switchsign = () => {
      showsabout.value = false;
      showlogin.value = false;
      showsign.value = true;
    };
    const switchlogin = () => {
      showsabout.value = false;
      showsign.value = false;
      showlogin.value = true;
    };
    const switchslogin = () => {
      showsabout.value = false;
      showssign.value = false;
      showslogin.value = true;
    };
    let showssign = ref(false);
    const switchssign = () => {
      showslogin.value = false;
      showssign.value = true;
      showsabout.value = false;
    };

    /*SIgn up*/

    /*login methods */
    let showlogin = ref(true);
    let showslogin = ref(false);
    const togglelogin = () => {
      showlogin.value = true;
      showslogin.value = false;
      showssign.value = false;
      showsabout.value = false;
    };
    const toggleslogin = () => {
      showslogin.value = true;
      showlogin.value = false;
      showsign.value = false;
      showsabout.value = false;
    };
    /*login methods ends */

    return {
      showsabout,
      showabout,
      showslogin,
      showlogin,
      togglelogin,
      toggleslogin,
      tab,
      showsign,
      showssign,
      switchsign,
      switchssign,
      switchlogin,
      switchslogin,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;

  background-color: #0090C1;
  
  color: white;
}

/* Control the right side */
.right {
  right: 0;
  background-color: #dee6e8;
  color: black;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.navi{
  position: relative;
  top:-23px;
}
.centered img {
  width: 160px;
  border-radius: 50%;
}
h1{
  position: relative;
  top:200px;
}
h1:hover{
  font-size: 40px;
  color: #000000;
   
}
.lefttext{
  position: relative;
  top:220px;
  text-transform: capitalize;
}


</style>