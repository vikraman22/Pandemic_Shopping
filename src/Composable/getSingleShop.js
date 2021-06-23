import { ref } from 'vue'
import { projectFirestore } from "../Firebase/config"

const getSingleShop = (id) => {

    const shop = ref(null)
    const error = ref(null)

    const load = async() => {
     try
     {
         let res = await projectFirestore.collection('store').doc(id).get()
         
         if(!res.exists)
         {
             throw Error("Store not available")
         }
          
         shop.value = {...res.data(), id: res.id}


     }
     catch (err)
     {
        error.value = err.message
     }


    }

    return { shop, error, load }

}

export default getSingleShop