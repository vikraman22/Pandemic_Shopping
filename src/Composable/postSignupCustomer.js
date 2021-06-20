
import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../Firebase/config.js'


const error = ref(null)

const signup = async (email, name, mobile, password, 
    locality, district, address) => {
    error.value = null


    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if (!res) {
            throw new Error("Could not complete the signup")
        }
        await projectFirestore.collection('customer').doc(res.user.uid).set({
            uid: res.user.uid,
            email: res.user.email,
            name: name,
            mobile: mobile,
            password: password,
            locality: locality,
            district: district,
            address: address,

        })
        //await projectAuth.currentUser.sendEmailVerification()
        error.value = null
    }
    catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}
const postSignupCustomer = () => {
    return { error, signup }
}
export default postSignupCustomer
