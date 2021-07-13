import {   ref } from 'vue'
import { projectFirestore } from '../Firebase/config'


const deleteOrder = data =>{

  // register the firestore collection reference
  let a = {...data[0], totalItems:data[0].availitems.length}

  projectFirestore.collection("corders").doc(data[0].OrderDocId).set(a)
  
    projectFirestore.collection("notify").doc(data[0].id).delete()
    projectFirestore.collection("orders").doc(data[0].OrderDocId).delete()

}

export default deleteOrder