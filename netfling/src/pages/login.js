import React from "react";
import { EmailInput, PasswordInput, FormBtn } from "../components/Form";
<<<<<<< HEAD
// import Form from "../components/Form";
=======
import axios from "axios"
>>>>>>> 32239f076d28739018cef610c2b059d852606368

function Login() {

    function sendData(event){
        event.preventDefault()
        console.log("sendData()")
        axios.post("/api/login", {isData: true}).then(
            response=>console.log(response)
        )
    }

    return (
        <form>
        <EmailInput />
        <PasswordInput />
<<<<<<< HEAD
        <FormBtn>Login</FormBtn>
=======
        <FormBtn onClick={sendData} name="Login"/>
>>>>>>> 32239f076d28739018cef610c2b059d852606368
        </form>
    );
}

export default Login;