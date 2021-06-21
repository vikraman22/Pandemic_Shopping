import { ref } from 'vue'
import { projectFirestore } from "../Firebase/config"

const getShops = () => {

    const shops = ref([])
    const error = ref(null)
    
    const load = async () => {
        try
        {
          const res = await projectFirestore.collection('store').get()
          
          shops.value = res.docs.map(doc => 
            { 
            return {...doc.data(), id : doc.id
            }
             
            })
        }
    
        catch (err)
        {
         error.value = err.message
         console.log(error.value)
        }
    }
    
    return {shops,error, load}
}

export default getShops