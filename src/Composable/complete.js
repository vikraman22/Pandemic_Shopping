 
import { projectFirestore } from '../Firebase/config'


const declineOrder = (id) =>{

  // register the firestore collection reference

  
  
    projectFirestore.collection("corders").doc(id).delete()
 
}

export default declineOrder