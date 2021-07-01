<template>
  <nav class="navbar navbar-dark bg-dark">
    <!-- Navbar content -->
    <div class="container" style="padding: 0px">
      <nav
        class="navbar nav-pills-link-active-color:primary  navbar-expand-lg navbar-dark bg-dark "  >
        <div class="container-fluid">
          <a
            class="navbar-brand"
            style="position: relative; right: 50px"
            href="#"
            @click="gototab('Chome')"
            ><i class="fas fa-home"></i> HOME</a
          >
          <a
            class="navbar-brand"
            style="position: relative; right: -400px"
            href="#"
            @click="gototab('Nearby')"
          >
            <i class="fas fa-store"></i> Nearby stores</a>
          <a
            class="navbar-brand"
            style="position: relative; right: -430px"
            href="#"
            @click="gototab('Yourorder')"
          >
            <i class="fas fa-list-ol"></i> Yourorder</a
          >
          
          <button
            type="button"
            Style="position: relative; right: -460px"
            class="btn btn-light"
            
          >
            <i class="fas fa-bell"></i> <b>Notification</b>&nbsp;
            <span class="badge bg-secondary">0 </span>
          </button>
          <a
            class="navbar-brand"
            style="position: relative; right: -510px"
            href="#"
            @click="gototab('Profile')"
            ><i class="fas fa-user"></i> Profile</a
          >
        </div>
      </nav>
    </div>
  </nav>

  <div class="content">
   
  <!--   <Accept /> -->
   

    <router-view />
  </div>
</template>

<script>
/* import { ref } from "vue"; */
import { useRouter } from "vue-router";
/* import Accept from "../components/Accept.vue"; */
export default {
  name: "Customerhome",
  /* components: { Accept }, */
  setup() {
    const router = useRouter();
    const gototab = (tab) => {
      router.push({ name: tab });
    };
    //modal
    
    
    return { gototab  };
  },
};
</script>
<style scoped>
.content {
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */
  top: 60px;
  position: relative;
  max-width: 960px; /* 2 */
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
}
body{
  background:#FBFFF1
}
a{
  text-transform:capitalize;
}
</style>
 