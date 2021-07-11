import { ref, watchEffect } from 'vue'
import { projectFirestore, projectAuth } from '../Firebase/config.js'

const getYourOrder = () => {
    
  const error = ref(null)
  const documents = ref(null)
  const user = ref(projectAuth.currentUser)

    let collectionRef = projectFirestore.collection("orders")
        .where('userId', "==", user.value.uid)

    const unsub = collectionRef.onSnapshot(snap => {
        let results = []
         snap.docs.forEach(doc => {
        // must wait for  the server to create the  timestamp & send it back
        results.push({...doc.data(), id: doc.id})
        });
        ;
        // update values
      documents.value = results[0].orderedItems
        error.value = null
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch the data'
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
    });

    console.log(documents.value);

  return { error, documents }
        
}

export default getYourOrder