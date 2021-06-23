
import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../Firebase/config.js'


const error = ref(null)

const signupstore = async (email, storename,ownername, mobile, password, 
    locality, district ) => {
    error.value = null

    /* console.log(
      email,
      storename,
      ownername,
      mobile,
      password,
      locality,
      district
    ); */

    try {
        const result = await projectAuth.createUserWithEmailAndPassword(email, password)

        if (!result) {
            throw new Error("Could not complete the signup")
        }
        await projectFirestore.collection('store').doc(result.user.uid).set({
            uid: result.user.uid,
            email: result.user.email,
            storename: storename,
            ownername: ownername,
            mobile: mobile,
            password: password,
            locality: locality,
            district: district
        })
        //await projectAuth.currentUser.sendEmailVerification()
        error.value = null
    }
    catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}
const postSignupStore = () => {
    return { error, signupstore }
}
export default postSignupStore
