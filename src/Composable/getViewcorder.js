import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../Firebase/config.js'

const getCorders = (cond, storename) => {

    const error = ref(null)
    const orderedUsers = ref(null)

    let collectionRef = projectFirestore.collection("corders")
        .where("store", "==", storename)
    
    if(cond==true){
        collectionRef = collectionRef.where('totalItems', "<=", 10)
            
    }
    else{
        collectionRef = collectionRef.where('totalItems', ">", 10)
    }

    const unsub = collectionRef.onSnapshot(snap => {
        let results = []
        snap.docs.forEach(doc => {
            // must wait for the server to create the timestamp & send it back
            results.push({ ...doc.data(), id: doc.id })
        });

        // update values
        orderedUsers.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        orderedUsers.value = null
        error.value = 'could not fetch the data'
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
    });

    console.log(orderedUsers.value);

    return { error, orderedUsers }

}

export default getCorders