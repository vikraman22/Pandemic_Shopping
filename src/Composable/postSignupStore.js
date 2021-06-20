
import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../Firebase/config.js'


const error = ref(null)

const signupstore = async (email, storename,ownername, mobile, password, 
    locality, district, ) => {
    error.value = null


    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if (!res) {
            throw new Error("Could not complete the signup")
        }
        await projectFirestore.collection('store').doc(res.user.uid).set({
            uid: res.user.uid,
            email: res.user.email,
            storename: storename,
            ownername: ownername,
            mobile: mobile,
            password: password,
            locality: locality,
            district: district,
            

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
