<template>
<div class="body">
   <div class="profile">
       <h5>My Profile</h5>
       <h6>{{user.displayName}}</h6>
      <button @click="handleClick" class="logout">Logout</button> 

  <form   >
      <!--  name change -->
    <div class="namechange">
    <label>Change Store Name</label>
    <input type="text"  placeholder="New name" required>
    <div class="submit">
      <button>Change name</button>
    </div>
    </div>
  </form>
  
  <form   >
      <!--  name change -->
    <div class="namechange">
    <label>Change Owner Name</label>
    <input type="text"  placeholder="New name" required>
    <div class="submit">
      <button>Change name</button>
    </div>
    </div>
  </form>
  <!-- address change -->
    <form   >
   
    <div class="address">
    <label>Change Address</label>
    <textarea name="address"  rows="3" required placeholder="New address"></textarea>
    <div class="submit">
      <button>Change address</button>
    </div>
    </div>
  </form>
  </div>
</div>
</template>

<script>

import getUser from '../Composable/getUser'
import useLogout from "../Composable/useLogout";
import { useRouter } from "vue-router";
export default {
  name:'Storeprofile',
  components: {},
  setup() {
    const { user } = getUser();
    const { logout } = useLogout();
    const router = useRouter();
    const handleClick = async () => {
      await logout();
      console.log("logged out");
      alert("You are logged out Sucessfully")
      router.push({ name: "Home" });
    };
    return { handleClick, user };
  },
};

</script>

<style scoped> 

.body{
position: relative;
top:40px;
max-width:90%;
max-height: 75%;
float:center;
}
form{
    max-height: 15px;
    max-width: 120px;
    margin: 100px auto;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    top:0px;
    max-width:75%;
    float: none;
    margin-bottom: 1px;
     
}
h5{
  font-weight: 400px;
   position:relative;
  float:left;
  top:-60px;
  right:-20px;
}
h6{
  position:relative;
  left:-85px;
  top:10px;
  color:purple;
}

.logout{
  position:relative;
  float:right;
  top:-80px;
  left:250px;
  

}

label{
    font-size: 17px;
}
  input, select,textarea {
    margin-bottom: 18px;
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