import { ref } from 'vue'
import { projectAuth } from '../Firebase/config.js'

const error = ref(null)
const login = async(email,password) =>{
    error.value = null

    try{
        const res = await projectAuth.signInWithEmailAndPassword(email,password)
        
        if(!res){
            throw new Error("Could not login. Please Try Again")
        }
        console.log("Login success");
        console.log(res);
        error.value = null

        return res
    }
    catch(err){
        console.log(err.message);
        error.value = err.message
    }
}

const checkLoginCustomer = () =>{
    return { error, login }
}

export default checkLoginCustomer