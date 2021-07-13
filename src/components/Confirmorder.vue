 <template>
 <h4 style="color:green;font-weight:bold">ORDERS</h4>
  <div class="row row-cols-1 row-cols-md-3 g-4" >
  <div v-for="i in orderedUsers" :key="i.id">
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header"  style="font-weight:bold;">ORDER DETAILS</div>
      <div class="card-body text-dark">
      
        <p class="card-text" style="font-weight:bold;">
           <img src="../assets/confirm.jpg"  class="card-img-top"><br>
           No of items - {{i.totalItems}}
        </p>
          <p class="card-title" style="font-size:12px;">Customer Name - {{i.userName}}</p>
            <router-link :to="{name: 'ConfirmViewOrder', params:{id: i.id}}">
          <div class="card-footer bg-transparent border-success"><Button>View order</Button></div>
            </router-link>
             <div class="card-footer bg-transparent border-success" @click="completed(i.id)"><Button><i class="fas fa-check-circle"></i> Complete order</Button></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
 
import { projectAuth,projectFirestore } from "../Firebase/config";
import getCorders from "../Composable/getViewcorder";
 
export default {
  name: "Confirmorder",
  setup(){
      
    let user = projectAuth.currentUser;
    //console.log("in uswr of min page", user);
    const { error, orderedUsers } = getCorders( user.email)
    const completed = async (id) =>{
      await projectFirestore.collection("corders").doc(id).delete()
      alert("Order Completed Successfully")
    }
    return { error, orderedUsers,completed }
  }
};
</script>

<style scoped>
Button{
  color:white;
  background-color:green;
  border-radius: 4px;
  text-transform: uppercase;
}
</style>